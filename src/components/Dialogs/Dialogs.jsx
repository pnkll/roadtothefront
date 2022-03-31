import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem';
import React, { useState } from 'react';
import { addMessageActionCreator } from '../../redux/dialogsReducer'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { getLogin, getPhoto } from '../../redux/selectors/auth-selectors'



const Dialogs = (props) => {

  const avatar = useSelector(getPhoto)
  const login = useSelector(getLogin)

  const dispatch = useDispatch()

  const { register, handleSubmit, reset } = useForm()

  const messages = useSelector(state => state.dialogsPage.messages)
  const dialogs = useSelector(state => state.dialogsPage.dialogs)

  const date = new Date()
  const getTime = () => {
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    return hours + ':' + minutes
  }


  let onAddMessage = (value) => {
    const time = getTime()
    dispatch(addMessageActionCreator(value.message, time))
    setState(false)
    reset()
  }

  const [editMode, setState] = useState(false)

  let messagesElems =
    messages.map(m => {
      if (m.userid == 'me') {
        return (<Message key={m.key} class={'me'} avatar={avatar} login={login} text={m.message} time={m.time} />)
      }
      else {
        return (<Message key={m.key} class={'other'} avatar={m.image} text={m.message} login={'User'} time={m.time} />)
      }
    })

  var dialogsElems =
    dialogs.map(d => (<DialogItem key={d.id} avatar={d.image} id={d.id} name={d.name} path={'/dialogs/' + d.id} />))


  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElems}
      </div>
      <div className={classes.messages}>
        {messagesElems}
        <form onSubmit={handleSubmit(onAddMessage)}>
          <input className={classes.textArea} type='text' {...register('message',
            { onChange: () => setState(true) })} />
          {editMode ? <input className={classes.submit} type='submit' /> : <></>}
        </form>
      </div>
    </div>

  )
}

export default Dialogs