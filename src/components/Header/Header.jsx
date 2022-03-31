import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classes from './Header.module.css'
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from '../../redux/async/authThunk'
import { getAuth, getLogin, getPhoto, getUserId } from "../../redux/selectors/auth-selectors";


const Header = (props) => {

  const isAuth = useSelector(getAuth)
  const userId = useSelector(getUserId)
  const login = useSelector(getLogin)
  const photo = useSelector(getPhoto)

  const moveToLoginPage = () => {
    navigate('/login')
  }

  useEffect(() => {
    if (!isAuth) {
      moveToLoginPage()
    }

  }, [isAuth])

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const logout = () => {
    dispatch(logoutThunk())
  }

  return (

    <header className={classes.header}>
      <img alt='' src='https://web-creator.ru/uploads/Page/33/react.svg' />
      <div className={classes.loginBlock}>{isAuth != true
        ? <>
          <NavLink to='/login'>Login</NavLink><br />
          <NavLink to='/sign'>Sign in</NavLink></>
        : <><div className={classes.mainCont}><div className={classes.photo}><img src={photo} /></div><div className={classes.cont}>
          <div className={classes.login}><NavLink to={`/profile/${userId}`}>{login}</NavLink></div>
          <div className={classes.logoutBut}><button onClick={logout}>Log out</button></div></div></div></>}</div>
    </header>
  )
}

export default Header