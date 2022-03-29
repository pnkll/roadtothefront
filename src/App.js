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
    <div className='app'>
      <HashRouter>

        <div className='app-wrapper'>
          <div className='header'>
            <Header store={props.store} state={state} />
          </div>
          <div className='container'>
            <div className='navbar'>
              <Nav sidebar={state.sidebar} id={state.auth.userId} /></div>
            {/* <div className='app-wrapper-content'> */}
            <div className='content'>
              <Suspense fallback={<Preloader />}>
                <Routes>
                  <Route path='profile/:id' element={<RequireAuth children={<Profile store={props.store} profilePage={state.profilePage} />} />} />
                  <Route path='news' element={<News />} />
                  <Route path='music' element={<Music />} />
                  <Route path='settings' element={<Settings />} />
                  <Route path='login' element={<Login />} />
                  <Route path='' element={<Login />} />
                  <Route path='dialogs/*' element={<RequireAuth children={<Dialogs store={props.store} state={state.dialogsPage} />} />} />
                  <Route path='users' element={<RequireAuth children={<Users />} />} />
                  <Route path='follows' element={<RequireAuth children={<Follows />} />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </div>
      </HashRouter>
    </div>
  )
}


export default App;
