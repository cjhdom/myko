import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux'
import {Provider} from 'react-redux'

import View from "./components/View";
import Home from "./components/Home";
import Member from "./components/Member";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactContainer from "./components/Contact/ContactContainer";
import MyList from "./components/MyList/index";
import ReportContainer from "./components/Report/ReportContainer";
import SearchResultContainer from "./components/SearchResult/SearchResultContainer";

class App extends Component {
    render() {
        const {store, history} = this.props
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div id="wrapper">
                        <Header/>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/home" component={Home}/>
                            <Route path="/view/:id" component={View}/>
                            <Route path="/members" component={Member}/>
                            <Route path="/contact" component={ContactContainer}/>
                            <Route path="/list" component={MyList}/>
                            <Route path="/report/:id/:kosiwonName" component={ReportContainer}/>
                            <Route path="/search" component={SearchResultContainer}/>
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
