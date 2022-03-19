import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile, { ProfileWrapper } from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router';
import Dialogs from './components/Dialogs/Dialogs'
import Users from './components/Users/Users';
import Login from './components/Login/Login';
import RequireAuth from './components/auth/RequireAuthHOC';
import { useDispatch, useSelector } from 'react-redux';
import { initializeApp } from './redux/async/appThunk';
import { useNavigate } from 'react-router-dom';
import Preloader from './components/default/Preloader/Preloader';




const App = (props) => {

const dispatch = useDispatch()
const state = useSelector(state => state)

    useEffect(()=>{
      dispatch(initializeApp())
    },[])

    if(!state.app.initialized){
    return <Preloader/>
    }    

    return (  
      <div className='app-wrapper'>
        <>Hi</>
        <Header store={props.store} state={state}/>
        <Nav sidebar={state.sidebar} id={state.auth.userId}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/:id' element={<RequireAuth children={<Profile store={props.store} profilePage={state.profilePage}/>}/>} />
            <Route path='/dialogs/*' element={<RequireAuth children ={<Dialogs store={props.store} state={state.dialogsPage}/>}/>} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/users' element={<RequireAuth children={<Users store={props.store} state={state.usersPage} />}/>}/>
            <Route path='/login' element={<Login state={state}/>} />
          </Routes>
        </div>
      </div>
    )
  }


export default App;
