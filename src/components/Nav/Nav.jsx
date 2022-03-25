import React, { useEffect } from 'react'
import classes from './Nav.module.css'
import {NavLink} from 'react-router-dom'
import SidebarFriends from './SidebarFriends/SidebarFriends'
import { useDispatch, useSelector } from 'react-redux'
import { getFriends } from '../../redux/selectors/follows-selectors'
import { getfollowsThunk } from '../../redux/async/followsThunk'
import { getUsers } from '../../redux/selectors/users-selectors'


function Nav(props){


    return (
        <nav className={classes.nav}>
        <div className={classes.item}><NavLink to={`/profile/${props.id}`}>Profile</NavLink></div>
        <div className={classes.item}><NavLink to='/dialogs'>Messages</NavLink></div>
        <div className={classes.item}><NavLink to='users'>Users</NavLink></div>
        <div className={classes.item}><NavLink to='/news'>News</NavLink></div>
        <div className={classes.item}><NavLink to='/music'>Music</NavLink></div>
        <div className={classes.item}><NavLink to='/settings'>Settings</NavLink></div>
        <SidebarFriends users={props.sidebar.users}/>
      </nav>
    )
}

export default Nav