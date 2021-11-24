import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router';


function App(props) {

  return (
    
      <div className='app-wrapper'>
        <Header />
        <Nav users={props.state.sidebar.users} name={props.state.sidebar.name} avatar={props.state.sidebar.avatar}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/me' element={<Profile posts={props.state.profilePage.posts} profiles={props.state.profilePage.profiles} updatePostText={props.updatePostText} addPost={props.addPost} postText={props.state.profilePage.newPostText}/>} />
            <Route path='/dialogs/*' element={<Dialogs messages={props.state.dialogsPage.messages} dialogs={props.state.dialogsPage.dialogs} avatar={props.state.dialogsPage.avatars}/>} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/profile/002' element={<Profile id={props.state.sidebar.users.id} posts={props.state.profilePage.posts} profiles={props.state.profilePage.profiles} />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
