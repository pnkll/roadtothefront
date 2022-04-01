import React, { useEffect } from 'react'
import classes from './Nav.module.css'
import { NavLink } from 'react-router-dom'
import SidebarFriends from './SidebarFriends/SidebarFriends'
import { useSelector } from 'react-redux'
import { getAuth, getUserId } from '../../redux/selectors/auth-selectors'

const Nav = (props) => {

  const isAuth = useSelector(getAuth)
  const userId = useSelector(getUserId)

  const setActive = ({isActive}) => isActive ? classes.active : classes.notActive;

  return <div className={classes.mainWrapper}>
    <nav className={classes.nav}>

      <NavLink className={setActive} to={`profile/${userId}`}>Profile</NavLink>
      <NavLink className={setActive} to='dialogs'>Messages</NavLink>
      <NavLink className={setActive} to='users'>Users</NavLink>
      <NavLink className={setActive} to='news'>News</NavLink>
      <NavLink className={setActive} to='music'>Music</NavLink>
      <NavLink className={setActive} to='settings'>Settings</NavLink>

      

    </nav>
    {isAuth && <SidebarFriends />}
  </div>
}

export default Nav