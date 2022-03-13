import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem';
import React from 'react';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogsReducer'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';



const Dialogs = (props) => {

  const dispatch = useDispatch()

  const { register, handleSubmit, reset} = useForm()

  const messages = useSelector(state => state.dialogsPage.messages)
  const dialogs = useSelector(state => state.dialogsPage.dialogs)
  const newMessageValue = useSelector(state => state.dialogsPage.newMessageValue)

  let onAddMessage = (value) => {
    dispatch(addMessageActionCreator(value.message))
    reset()
  }

  let messagesElems =
    messages.map(m => {
      if (m.userid == 'me') {
        return (<div key={m.key} className={classes.myMessage}><Message avatar={m.image} text={m.message} /></div>)
      }
      else {
        return (<div key={m.key} className={classes.message}><Message avatar={m.image} text={m.message} /></div>)
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
          <div>Name</div>
          {messagesElems}
          <form onSubmit={handleSubmit(onAddMessage)}>
            <input type='text' {...register('message')}/>
            <input type='submit'/>
          </form>
        </div>
      </div>
  
    )
}

export default Dialogs