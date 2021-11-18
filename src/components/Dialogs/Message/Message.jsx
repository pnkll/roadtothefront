import classes from './Message.module.css'

function Message(props) {
props.class == classes.myMessage
  return (
    <div className={props.class}>{props.text}</div>
  )
}

export default Message