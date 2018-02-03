import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import LoginPopup from './LoginPopup';

import {getIsLoggedIn} from "../../../reducers/user";
import {isLoginPopup} from "../../../reducers/ui";
import {toggleLoginPopup} from "../../../actions"

class LoginPopupContainer extends Component {
    props: {
        isLoggedIn: PropTypes.bool.isRequired,
        loginPopup: PropTypes.bool.isRequired,
        toggleLoginPopup: PropTypes.func.isRequired
    }

    render() {
        const {
            isLoggedIn,
            loginPopup,
            toggleLoginPopup
        } = this.props
        if (isLoggedIn || !loginPopup) {
            return null
        } else {
            return (
                <LoginPopup toggleLoginPopup={toggleLoginPopup}/>
            )
        }
    }
};

LoginPopupContainer.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    toggleLogin: PropTypes.func.isRequired
};

export default connect(
    state => ({
        isLoggedIn: getIsLoggedIn(state.user),
        loginPopup: isLoginPopup(state.ui)
    }),
    {
        toggleLoginPopup
    }
)(LoginPopupContainer)