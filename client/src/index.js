import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import { setCurrentUser } from './store/actions';
import api from './services/api';
import decode from 'jwt-decode'
import { BrowserRouter } from 'react-router-dom'

if (localStorage.jwtToken) {
    //set token in http headers if token in local storage
    api.setToken(localStorage.jwtToken)
    try {
        //decode the token and set the current user
        store.dispatch(setCurrentUser(decode(localStorage.jwtToken)))
    } catch (err) {
        store.dispatch(setCurrentUser({}))
    }
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
document.getElementById('root'));