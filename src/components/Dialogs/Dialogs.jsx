import classes from './Dialogs.module.css'
// import MyPosts from './My posts/MyPosts'
import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

// function DialogItem(props) {
//   let path = '/dialogs/' + props.id
//   return (
//     <div className={classes.dialog}><NavLink to={path}>{props.name}</NavLink></div>
//   )
// }

// function Message(props) {
//   return (
//     <div className={classes.message}>{props.text}</div>
//   )
// }

//Данные которые на самом деле будут приходить с сервера

let dialogs = [
  { id: 1, name: 'name1' },
  { id: 2, name: 'name2' },
  { id: 3, name: 'name3' },
  { id: 4, name: 'name4' }
]

let messages = [
  { message: 'First message on this dialog' },
  { message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa!' },
  { message: 'Lorem ipsum dolor sit amet consectetur adipisic.' }
]


let messagesElems =
  messages.map(m => (<Message text={m.message} />))

let dialogsElems =
  dialogs.map(d => (<DialogItem id={d.id} name={d.name} />))

//^^^^^^^^^^^^^^ 

function Dialogs() {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElems[0]}
        {dialogsElems[1]}
        {dialogsElems[2]}
        {dialogsElems[3]}
      </div>
      <div className={classes.messages}>
        {messagesElems[0]}
        {messagesElems[1]}
        {messagesElems[2]}
      </div>
    </div>

  )
}

export default Dialogs