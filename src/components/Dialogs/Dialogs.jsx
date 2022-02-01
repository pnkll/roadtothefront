import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem';
import React from 'react';
import { useNavigate, useEffect} from 'react-router-dom'
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogsReducer'



const Dialogs = (props) => {

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
        return (<div key={m.key} className={classes.myMessage}><Message avatar={m.image} text={m.message} /></div>)
      }
      else {
        return (<div key={m.key} className={classes.message}><Message avatar={m.image} text={m.message} /></div>)
      }
    })

  var dialogsElems =
    props.dialogs.map(d => (<DialogItem key={d.id} avatar={d.image} id={d.id} name={d.name} path={'/dialogs/' + d.id} />))


    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          {dialogsElems}
        </div>
        <div className={classes.messages}>
          <div>Name</div>
          {messagesElems}
          <textarea value={props.dialogsPage.newMessageValue} onChange={onUpdateMessage}></textarea>
          <button onClick={onAddMessage}>Add message</button>
        </div>
      </div>
  
    )
}

export default Dialogs