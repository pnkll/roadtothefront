import classes from './Message.module.css'

function Message(props) {

  return (
    <div className={classes.message}><img src={props.avatar}/>{props.text}</div>
  )
}

export default Message