import classes from './Nav.module.css'
import {NavLink} from 'react-router-dom'
import SidebarFriends from './SidebarFriends/SidebarFriends'


function Nav(props){
  // console.log(props)
  // debugger
    return (
        <nav className={classes.nav}>
        <div className={classes.item}><NavLink to='/profile'>Profile</NavLink></div>
        <div className={classes.item}><NavLink to='/dialogs'>Messages</NavLink></div>
        <div className={classes.item}><NavLink to='/users'>Users</NavLink></div>
        <div className={classes.item}><NavLink to='/news'>News</NavLink></div>
        <div className={classes.item}><NavLink to='/music'>Music</NavLink></div>
        <div className={classes.item}><NavLink to='/settings'>Settings</NavLink></div>
        <SidebarFriends users={props.sidebar.users} />
      </nav>
    )
}

export default Nav