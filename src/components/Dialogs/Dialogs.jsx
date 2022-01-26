import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem';
import React from 'react';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogsReducer'



class Dialogs extends React.Component{

  render(){
    
    let onAddMessage = () => {
      this.props.addMess()
    }
  
  
    let onUpdateMessage = (elem) =>{
      let newText = elem.target.value
      this.props.updateMess(newText)
    }
  
    let messagesElems =
      this.props.messages.map(m => {
        if (m.userid == 'me') {
          return (<div key={m.key} className={classes.myMessage}><Message avatar={m.image} text={m.message} /></div>)
        }
        else {
          return (<div key={m.key} className={classes.message}><Message avatar={m.image} text={m.message} /></div>)
        }
      })
  
    var dialogsElems =
      this.props.dialogs.map(d => (<DialogItem key={d.id} avatar={d.image} id={d.id} name={d.name} path={'/dialogs/' + d.id} />))
  
    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          {dialogsElems}
        </div>
        <div className={classes.messages}>
          {messagesElems}
          <textarea value={this.props.dialogsPage.newMessageValue} onChange={onUpdateMessage}></textarea>
          <button onClick={onAddMessage}>Add message</button>
        </div>
      </div>
  
    )
  }
}

export default Dialogs