import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classes from './Header.module.css'
import { useDispatch } from "react-redux";
import { logoutThunk } from '../../redux/async/authThunk'


function Header(props) {

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

  const photo = props.state.usersPage


  return (

    <header className={classes.header}>
      <img alt='' src='https://web-creator.ru/uploads/Page/33/react.svg' />
      <div className={classes.loginBlock}>{props.state.auth.isAuth != true
        ? <>
          <NavLink to='/login'>Login</NavLink><br />
          <NavLink to='/sign'>Sign in</NavLink></>
        : <><NavLink to={`/profile/${props.state.auth.userId}`}>{props.state.auth.login}</NavLink><br />
          <button onClick={logout}>Log out</button></>}</div>
    </header>
  )
}

export default Header