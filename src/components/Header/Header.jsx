import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css'
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from '../../redux/async/authThunk'


function Header(props) {
  const dispatch = useDispatch()
  console.log(props)

  const isAuth = useSelector(state => state.auth.isAuth)
  useEffect(() => {
    dispatch(checkAuth())
  }, [])

  return (

    <header className={classes.header}>
      <img alt='' src='https://yt3.ggpht.com/a/AATXAJyu6W5PFO1OG71jmGRdWYRSwsLAtL7GnC0t1hTGOg=s900-c-k-c0x00ffffff-no-rj' />
      <div className={classes.loginBlock}>{isAuth != true
        ? <><NavLink to='/login'>Login</NavLink><br/>
          <NavLink to='/sign'>Sign in</NavLink></>
        : <NavLink to='/me'>My account</NavLink>}</div>
    </header>
  )
}

export default Header