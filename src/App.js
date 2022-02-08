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
import Users from './components/Users/Users';
import Clock from './components/tests/clock/clock';


const App = (props) => {
  
    return (
      <div className='app-wrapper'>
        <Header store={props.store}/>
        <Nav sidebar={props.state.sidebar} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/:id' element={<Profile store={props.store} />} />
            <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/users' element={<Users store={props.store} />} />
            <Route path='/clock' element={<Clock />} />
          </Routes>
        </div>
      </div>
    )
  }

export default App;
