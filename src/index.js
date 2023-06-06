import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import contactReducer from './redux/contactReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

// Create the Redux store with the contactReducer and Redux DevTools extension.
const store = createStore(contactReducer, composeWithDevTools());

const root = createRoot(document.querySelector('#root'));

// Render the App component wrapped with Redux Provider and Router.
root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);