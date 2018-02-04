import React, {Component} from 'react';
import {Route} from 'react-router'
import ListHeaderContainer from "./ListHeader/ListHeaderContainer";

class MyList extends Component {
    render() {
        const baseUrl = this.props.match.url
        return (
            <div id="contentWrapper">
                <div id="main_search_list">
                    <ListHeaderContainer/>
                    <Route path={`${baseUrl}/kosiwon-list-favorite`} component={LoginContainer}/>
                    <Route path={`${baseUrl}/kosiwon-list-recent`} component={NormalRegistrationContainer}/>
                </div>
            </div>
        );
    }
}

export default MyList;
