import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { init, socketMiddleware } from './actions/socket';

import App from './App';
import libraryApp from './reducers';

let store = createStore( libraryApp,  composeWithDevTools( applyMiddleware( thunk, socketMiddleware ) ) );
init( store )

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('.main')
);

