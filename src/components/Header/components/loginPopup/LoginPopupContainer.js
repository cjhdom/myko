import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import LoginPopup from './LoginPopup';

import {getIsLoggedIn} from "../../../../reducers/user";
import {getWonjangLoginPopup, isLoginPopup} from "../../../../reducers/ui";
import {toggleLoginPopup, toggleWonjangPopup} from "../../../../actions"
import WonjangLoginPopup from "./WonjangLoginPopup";

class LoginPopupContainer extends Component {
    render() {
        const {
            isLoggedIn,
            loginPopup,
            toggleLoginPopup,
            toggleWonjangPopup,
            wonjangLoginPopup
        } = this.props
        if (isLoggedIn || (!loginPopup && !wonjangLoginPopup)) {
            return null
        } else {
            if (wonjangLoginPopup) {
                return (
                    <WonjangLoginPopup toggleWonjangPopup={toggleWonjangPopup} />
                )
            } else {
                return (
                    <LoginPopup toggleLoginPopup={toggleLoginPopup}/>
                )
            }
        }
    }
};

LoginPopupContainer.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    loginPopup: PropTypes.bool.isRequired,
    toggleLoginPopup: PropTypes.func.isRequired
};

export default connect(
    state => ({
        isLoggedIn: getIsLoggedIn(state.user),
        wonjangLoginPopup: getWonjangLoginPopup(state.ui),
        loginPopup: isLoginPopup(state.ui)
    }),
    {
        toggleLoginPopup,
        toggleWonjangPopup
    }
)(LoginPopupContainer)