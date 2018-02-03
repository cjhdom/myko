import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'whatwg-fetch'


import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import Home from './Home';
import View from './View';
import Footer from './Footer';
import Header from './Header';
import Member from './Member'
import reducers from './reducers'

const initialState = {
    user: {
        isLoggedIn: false
    }
}

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
    devTools = a => a;
}

const store = createStore(
    combineReducers({
        ...reducers
    }),
    initialState,
    compose(applyMiddleware(thunk), devTools)
)

const rootElement = document.getElementById('root');

const renderApp = () => {
    ReactDom.render(
        <Provider store={store}>
            <Router>
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
            </Router>
        </Provider>,
        rootElement
    );
};

if (module.hot) {
    module.hot.accept();
}

renderApp();