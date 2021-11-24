import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals'
// import state from './redux/state'
import { BrowserRouter } from 'react-router-dom';
import { addPost, updatePostText } from './redux/state'

export let rerenderEntireTree = (state) => {


    ReactDOM.render(

        <React.StrictMode>

            <BrowserRouter><App state={state} addPost={addPost} updatePostText={updatePostText} /></BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}