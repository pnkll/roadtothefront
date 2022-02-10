import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css'
import { useDispatch, useSelector } from "react-redux";
import * as axios from 'axios'
import { setUserData } from '../../redux/authReducer'


function Header(props) {
  const dispatch = useDispatch()

  const result = useSelector(state => state.auth.result)
  useEffect(() => {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true })
      .then(response => {
        const login = response.data.data.login
        const email = response.data.data.email
        const userId = response.data.data.id
        const result = response.data.resultCode
        if ( result === 0){
        dispatch(setUserData(userId, login, email, result))
        }
      })
  }, [])

  return (

    <header className={classes.header}>
      <img alt='' src='https://yt3.ggpht.com/a/AATXAJyu6W5PFO1OG71jmGRdWYRSwsLAtL7GnC0t1hTGOg=s900-c-k-c0x00ffffff-no-rj' />
      <div className={classes.loginBlock}>{result != 0
        ? <><NavLink to='/login'>Login</NavLink><br/>
          <NavLink to='/sign'>Sign in</NavLink></>
        : <NavLink to='/me'>My account</NavLink>}</div>
    </header>
  )
}

export default Header