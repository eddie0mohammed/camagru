import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';

import rootReducer from './components/reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(),
    )
    
    );

ReactDOM.render(

    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
     </Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA