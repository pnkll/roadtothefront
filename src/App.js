import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';


function App() {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Routes>        
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/dialogs' element={<Dialogs/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
