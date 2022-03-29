import React, { useEffect } from 'react'
import classes from './Nav.module.css'
import { NavLink } from 'react-router-dom'
import SidebarFriends from './SidebarFriends/SidebarFriends'
import { useSelector } from 'react-redux'

const Nav = (props) => {


  const isAuth = useSelector(state => state.auth.isAuth)

  const setActive = ({isActive}) => isActive && classes.active;

  return <div className={classes.mainWrapper}>
    <nav className={classes.nav}>

      <NavLink className={setActive} to={`profile/${props.id}`}>Profile</NavLink>
      <NavLink className={setActive} to='dialogs'>Messages</NavLink>
      <NavLink className={setActive} to='users'>Users</NavLink>
      <NavLink className={setActive} to='news'>News</NavLink>
      <NavLink className={setActive} to='music'>Music</NavLink>
      <NavLink className={setActive} to='settings'>Settings</NavLink>

      

    </nav>
    {isAuth && <SidebarFriends users={props.sidebar.users} />}
  </div>
}

export default Nav