import classes from '../Dialogs.module.css'

function Message(props) {
  return (
    <div className={classes.message}>{props.text}</div>
  )
}

export default Message