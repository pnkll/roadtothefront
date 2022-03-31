import React from 'react'
import classes from '../Dialogs.module.css'

const Message = (props) => {
  return (
    <div className={props.class == 'me' ? classes.me : classes.notMe}><div className={classes.in}><img src={props.avatar}/>{props.login}<br/>
    <div className={classes.text}>{props.text}
    <div className={classes.time}>{props.time}</div>
    </div>
    
    </div></div>
  )
}

export default Message