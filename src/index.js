import React from 'react';
import ReactDom from 'react-dom';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import 'whatwg-fetch'
import { createBrowserHistory as createHistory } from "history";
import {AppContainer} from 'react-hot-loader'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import App from './App';
import reducers from './reducers'

let userData = sessionStorage.getItem('userData') ? JSON.parse(sessionStorage.getItem('userData')) : {}
const initialState = {
    user: {
        isLoggedIn: false,
        userData
    }
}

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
    devTools = a => a;
}

const history = createHistory()
const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    initialState,
    compose(applyMiddleware(thunk, routerMiddleware(history)), devTools, )
)


const rootElement = document.getElementById('root');

const renderApp = () => {
    ReactDom.render(
        <AppContainer>
            <App store={store} history={history} />
        </AppContainer>,
        rootElement
    );
};

if (module.hot) {
    module.hot.accept('./App', () => {
        const App = require('./App').default;
        ReactDom.render(
            <AppContainer>
                <App store={store} history={history} />
            </AppContainer>,
            rootElement
        );
    })

    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers/index');
        store.replaceReducer(nextRootReducer);
    });
}

renderApp();