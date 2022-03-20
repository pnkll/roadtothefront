import React from 'react'
import classes from './Message.module.css'

const Message = (props) => {

  return (
    <div className={classes.message}><img src={props.avatar}/>{props.text}</div>
  )
}

export default Message