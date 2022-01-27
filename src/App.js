import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Clock from './components/tests/clock/clock';
import ProfileContainer from './components/Profile/ProfileContainer';


function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav sidebar={props.state.sidebar} />
      <div className='app-wrapper-content'>
        <Routes>
        <Route path='/profile/me' element={<ProfileContainer store={props.store}/>} />
          <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/profile/002' element={<Profile store={props.store} user={props.state.sidebar.users[1]}/>} />
          <Route path='/users' element={<UsersContainer store={props.store}/>} />
          <Route path='/clock' element={<Clock />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
