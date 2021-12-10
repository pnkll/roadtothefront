import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem';
import React from 'react';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogsReducer'



function Dialogs(props) {

  // let newMessagesElem = React.createRef(); - Можно и так, просто решил здесь сделать немного иначе чем на странице Profile в textarea для доб-ия поста

  let onAddMessage = () => {
    props.addMess()
  }


  let onUpdateMessage = (elem) =>{
    let newText = elem.target.value
    props.updateMess(newText)
  }

  let messagesElems =
    props.messages.map(m => {
      if (m.userid == 'me') {
        return (<div className={classes.myMessage}><Message avatar={m.image} text={m.message} /></div>)
      }
      else {
        return (<div className={classes.message}><Message avatar={m.image} text={m.message} /></div>)
      }
    })

  let dialogsElems =
    props.dialogs.map(d => (<DialogItem avatar={d.image} id={d.id} name={d.name} path={'/dialogs/' + d.id} />))

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElems}
      </div>
      <div className={classes.messages}>
        {messagesElems}
        <textarea value={props.dialogsPage.newMessageValue} onChange={onUpdateMessage}></textarea>
        <button onClick={onAddMessage}>Add message</button>
      </div>
    </div>

  )
}

export default Dialogs