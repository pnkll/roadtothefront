import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import { addPost, updatePostText, addMessage, updateMessageText, subscribe } from './redux/store'




let rerenderEntireTree = (state) => {
    console.log('state обновлен')
    ReactDOM.render(

        <React.StrictMode><Provider store={store}>

            <BrowserRouter><App store={store} state={state} dispatch={store.dispatch.bind(store)} /></BrowserRouter>
        </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
    
}

rerenderEntireTree(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


