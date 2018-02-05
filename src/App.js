import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux'
import {Provider} from 'react-redux'

import View from "./View";
import Home from "./Home";
import Member from "./Member";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
    render() {
        const {store, history} = this.props
        return (
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
            </Provider>
        );
    }
}

App.propTypes = {};

export default App;
