import React, {Component} from 'react';
import {Route} from 'react-router'
import LoginContainer from "./Login/LoginContainer";
import NormalRegistrationContainer from "./NormalRegistration/NormalRegistrationContainer";


class Login extends Component {

    componentWillMount() {
        document.getElementsByTagName('body')[0].setAttribute('className', 'sub_search_list');
    }

    render() {
        const baseUrl = this.props.match.url
        return (
            <div id="contentWrapper">
                <div className="top_line">
                    <Route path={`${baseUrl}/login`} component={LoginContainer}/>
                    <Route path={`${baseUrl}/join-user`} component={NormalRegistrationContainer}/>
                </div>
            </div>
        );
    }
}

export default Login;
