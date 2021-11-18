import classes from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

function DialogItem(props) {
  return (
    <div className={classes.dialog}><NavLink to={props.path}><img src={props.avatar}/>{props.name}</NavLink></div>
  )
}

export default DialogItem