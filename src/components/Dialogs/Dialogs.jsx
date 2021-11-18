import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem';



function Dialogs(props) {


  let messagesElems =
  // props.messages.map(m => (<Message text={m.message} />))
  props.messages.map(m => {
    if (m.userid == 'me'){
      var a = classes.myMessage
  return (<Message text={m.message} class={a}/>)
  }
  else{
    return (<Message text={m.message} class={classes.message}/>)
  }})

  let dialogsElems =
  props.dialogs.map(d => (<DialogItem avatar={d.image} id={d.id} name={d.name} path={'/dialogs/' + d.id} />))

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElems}
      </div>
      <div className={classes.messages}>
        {messagesElems}
      </div>
    </div>

  )
}

export default Dialogs