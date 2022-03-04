import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import Dialogs from './components/Dialogs/Dialogs'
import Users from './components/Users/Users';
import Login from './components/Login/Login';
import RequireAuth from './components/auth/RequireAuthHOC';


const App = (props) => {
    return (
      <div className='app-wrapper'>
        <Header store={props.store}/>
        <Nav sidebar={props.state.sidebar} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/:id' element={<RequireAuth children={<Profile store={props.store} state={props.state.profilePage}/>}/>} />
            <Route path='/dialogs/*' element={<RequireAuth children ={<Dialogs store={props.store} state={props.state.dialogsPage}/>}/>} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/users' element={<RequireAuth children={<Users store={props.store} state={props.state.usersPage} />}/>}/>
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </div>
    )
  }

export default App;
