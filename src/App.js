import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router';
import Dialogs from './components/Dialogs/Dialogs'
import Users from './components/Users/Users';
import Login from './components/Login/Login';
import RequireAuth from './components/auth/RequireAuthHOC';
import { useDispatch } from 'react-redux';
import { initializeApp } from './redux/async/appThunk';
import Preloader from './components/default/Preloader/Preloader';


const App = (props) => {


const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(initializeApp())
    },[])

    if(!props.state.app.initialized){

    return <Preloader/>
    }

    return (
      <div className='app-wrapper'>
        <Header store={props.store} state={props.state}/>
        <Nav sidebar={props.state.sidebar} id={props.state.auth.userId}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/:id' element={<RequireAuth children={<Profile store={props.store} profilePage={props.state.profilePage}/>}/>} />
            <Route path='/dialogs/*' element={<RequireAuth children ={<Dialogs store={props.store} state={props.state.dialogsPage}/>}/>} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/users' element={<RequireAuth children={<Users store={props.store} state={props.state.usersPage} />}/>}/>
            <Route path='/login' element={<Login state={props.state}/>} />
          </Routes>
        </div>
      </div>
    )
  }

export default App;
