import React from 'react';
import ReactDom from 'react-dom';
import {Route, Switch} from 'react-router-dom';
import 'whatwg-fetch'
import { createBrowserHistory as createHistory } from "history";

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import Home from './Home';
import View from './View';
import Footer from './Footer';
import Header from './Header';
import Member from './Member'
import reducers from './reducers'

let userData = sessionStorage.getItem('userData') ? JSON.parse(sessionStorage.getItem('userData')) : {}
console.log(sessionStorage.getItem('userData'))
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
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/Home" component={Home}/>
                        <Route path="/View/:id" component={View}/>
                        <Route path="/Members" component={Member}/>
                    </Switch>
                    <Footer/>
                </div>
            </ConnectedRouter>
        </Provider>,
        rootElement
    );
};

if (module.hot) {
    module.hot.accept();
}

renderApp();