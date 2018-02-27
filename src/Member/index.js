import React, {Component} from 'react';
import {Route} from 'react-router'
import LoginContainer from "./Login/LoginContainer";
import NormalRegistrationContainer from "./UserRegistration/UserRegistrationContainer";
import UserFormContainer from "./UserForm/UserFormContainer";
import WonjangRegistrationContainer from "./WonjangRegistration/WonjangRegistrationContainer";
import WonjangFormContainer from "./WonjangForm/WonjangFormContainer";
import UserEditFormContainer from "./UserEditForm/UserEditFormContainer";
import WonjangEditFormContainer from "./WonjangEditForm/WonjangEditFormContainer";
import UnregisterContainer from "./Unregister/UnregisterContainer";

class Member extends Component {
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
                    <Route path={`${baseUrl}/join-wonjang`} component={WonjangRegistrationContainer}/>
                    <Route path={`${baseUrl}/register-user`} component={UserFormContainer}/>
                    <Route path={`${baseUrl}/register-wonjang`} component={WonjangFormContainer}/>
                    <Route path={`${baseUrl}/edit-user`} component={UserEditFormContainer}/>
                    <Route path={`${baseUrl}/edit-wonjang`} component={WonjangEditFormContainer}/>
                    <Route path={`${baseUrl}/unregister`} component={UnregisterContainer}/>
                </div>
            </div>
        );
    }
}

export default Member;
