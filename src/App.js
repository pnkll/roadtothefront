import React, { lazy, Suspense, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import RequireAuth from './components/auth/RequireAuthHOC';
import { useDispatch, useSelector } from 'react-redux';
import { initializeApp } from './redux/async/appThunk';
import Preloader from './components/common/Preloader/Preloader';
import Follows from './components/Follows/Follows';

const Dialogs = lazy(() => import('./components/Dialogs/Dialogs'))
const Users = lazy(() => import('./components/Users/Users'))


const App = (props) => {

  const dispatch = useDispatch()
  const state = useSelector(state => state)

  useEffect(() => {
    dispatch(initializeApp())
  }, [])

  if (!state.app.initialized) {
    return <Preloader />
  }

  return (
    <div className='app-wrapper'>

      <HashRouter>
        <Header store={props.store} state={state} />
        <Nav sidebar={state.sidebar} id={state.auth.userId} />
        <div className='app-wrapper-content'>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path='profile/:id' element={<RequireAuth children={<Profile store={props.store} profilePage={state.profilePage} />} />} />
              <Route path='news' element={<News />} />
              <Route path='music' element={<Music />} />
              <Route path='settings' element={<Settings />} />
              <Route path='login' element={<Login state={state} />} />
              <Route path='dialogs/*' element={<RequireAuth children={<Dialogs store={props.store} state={state.dialogsPage} />} />} />
              <Route path='users' element={<RequireAuth children={<Users/>} />} />
              <Route path='follows' element={<RequireAuth children={<Follows/>} />} />
            </Routes>
          </Suspense>
        </div>
      </HashRouter>
    </div>
  )
}


export default App;
