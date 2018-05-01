import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import LoggedIn from './LoggedIn';
import NotLoggedIn from './NotLoggedIn';
import {getIsLoggedIn} from "../../../../reducers/user";

const LoginContainer = ({isLoggedIn}) => {
    return (
        <ul className="header_top">
            {isLoggedIn ? <LoggedIn /> : <NotLoggedIn/>}
            <li><a>원장님이신가요?</a></li>
        </ul>
    )
};

LoginContainer.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default connect(
    state => ({
        isLoggedIn: getIsLoggedIn(state.user)
    })
)(LoginContainer)