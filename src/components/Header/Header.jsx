import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classes from './Header.module.css'
import { useDispatch } from "react-redux";
import { checkAuth, logoutThunk } from '../../redux/async/authThunk'


function Header(props) {
  
  // useEffect(() => {
  //   dispatch(checkAuth())
  // },[]) 

  const moveToLoginPage = () => {
    navigate('/login')
  }

  useEffect(() => {
    if(!props.state.auth.isAuth){
    moveToLoginPage()
    }
    
  }, [props.state.auth.isAuth])

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = () => {
    dispatch(logoutThunk())
  }


  return (

    <header className={classes.header}>
      <img alt='' src='https://yt3.ggpht.com/a/AATXAJyu6W5PFO1OG71jmGRdWYRSwsLAtL7GnC0t1hTGOg=s900-c-k-c0x00ffffff-no-rj' />
      <div className={classes.loginBlock}>{props.state.auth.isAuth != true
        ? <>
          <NavLink to='/login'>Login</NavLink><br />
          <NavLink to='/sign'>Sign in</NavLink></>
        : <><NavLink to='/me'>My account</NavLink><br />
          <button onClick={logout}>Log out</button></>}</div>
    </header>
  )
}

export default Header