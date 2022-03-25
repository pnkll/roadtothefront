import React, { useEffect } from 'react'
import classes from './Nav.module.css'
import {NavLink} from 'react-router-dom'
import SidebarFriends from './SidebarFriends/SidebarFriends'
import { useSelector } from 'react-redux'

const Nav = (props) => {


  const isAuth = useSelector(state => state.auth.isAuth)

    return (
        <nav className={classes.nav}>
        <div className={classes.item}><NavLink to={`/profile/${props.id}`}>Profile</NavLink></div>
        <div className={classes.item}><NavLink to='/dialogs'>Messages</NavLink></div>
        <div className={classes.item}><NavLink to='users'>Users</NavLink></div>
        <div className={classes.item}><NavLink to='/news'>News</NavLink></div>
        <div className={classes.item}><NavLink to='/music'>Music</NavLink></div>
        <div className={classes.item}><NavLink to='/settings'>Settings</NavLink></div>
        
        {isAuth && <SidebarFriends users={props.sidebar.users}/>}
        
      </nav>
    )
}

export default Nav