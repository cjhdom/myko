import React from 'react';
import PropTypes from 'prop-types'
import LoggedIn from './LoggedIn';
import NotLoggedIn from './NotLoggedIn';

const LoginContainer = ({loginState, toggleLogin}) => {
    return (
        <ul className="header_top">
            {loginState.isLoggedIn ? <LoggedIn loginState={loginState} toggleLogin={toggleLogin}/> : <NotLoggedIn loginState={loginState} toggleLogin={toggleLogin}/>}
            <li><a>원장님이신가요?</a></li>
        </ul>
    )
};

LoginContainer.propTypes = {
    loginState: PropTypes.object.isRequired,
    toggleLogin: PropTypes.func.isRequired
};

export default LoginContainer