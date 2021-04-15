import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications';
import App from './App';
import store from './global/store';
import './styles/app';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ToastProvider autoDismissTimeout={2000}>
                <App />
            </ToastProvider>
        </Router>
    </Provider>
    ,document.getElementById("app"))