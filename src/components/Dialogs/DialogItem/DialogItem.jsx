import classes from '../Dialogs.module.css'
// import MyPosts from './My posts/MyPosts'
import { NavLink } from 'react-router-dom'

function DialogItem(props) {
  let path = '/dialogs/' + props.id
  return (
    <div className={classes.dialog}><NavLink to={path}>{props.name}</NavLink></div>
  )
}

export default DialogItem