import classes from './Dialogs.module.css'
// import MyPosts from './My posts/MyPosts'
import { NavLink } from 'react-router-dom'

function DialogItem(props) {
  let path = '/dialogs/' + props.id
  return (
    <div className={classes.dialog}><NavLink to={path}>{props.name}</NavLink></div>
  )
}

function Message(props) {
  return (
    <div className={classes.message}>{props.text}</div>
  )
}

let dialogsData = [
  {id : 1, name : 'name1'},
  {id : 2, name : 'name2'},
  {id : 3, name : 'name3'},
  {id : 4, name : 'name4'}
]

let messagesData = [
  {message : 'First message on this dialog'},
  {message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa!'},
  {message : 'Lorem ipsum dolor sit amet consectetur adipisic.'}
]

function Dialogs() {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
        <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
        <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
        <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
      </div>
      <div className={classes.messages}>
        <Message text={messagesData[0].message} />
        <Message text={messagesData[1].message} />
        <Message text={messagesData[2].message} />
      </div>
    </div>
    
  )
}

export default Dialogs