import React, { useEffect } from 'react'
import classes from './Nav.module.css'
import { NavLink } from 'react-router-dom'
import SidebarFriends from './SidebarFriends/SidebarFriends'
import { useSelector } from 'react-redux'

const Nav = (props) => {


  const isAuth = useSelector(state => state.auth.isAuth)

  return <div className={classes.mainWrapper}>
    <nav className={classes.nav}>

      <NavLink className={({isActive})=> `${isActive && classes.active}`} to={`/profile/${props.id}`}>Profile</NavLink>
      <NavLink className={({isActive})=> `${isActive && classes.active}`} to='/dialogs'>Messages</NavLink>
      <NavLink className={({isActive})=> `${isActive && classes.active}`} to='users'>Users</NavLink>
      <NavLink className={({isActive})=> `${isActive && classes.active}`} to='/news'>News</NavLink>
      <NavLink className={({isActive})=> `${isActive && classes.active}`} to='/music'>Music</NavLink>
      <NavLink className={({isActive})=> `${isActive && classes.active}`} to='/settings'>Settings</NavLink>

      

    </nav>
    {isAuth && <SidebarFriends users={props.sidebar.users} />}
  </div>
}

export default Nav