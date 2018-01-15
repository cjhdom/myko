import React from 'react';
import PropTypes from 'prop-types';

const NotLoggedIn = ({toggleLogin}) => {
    return (
        <li>
            <a onClick={toggleLogin}>로그인 / 회원가입</a>
        </li>
    )
};

NotLoggedIn.propTypes = {
    toggleLogin: PropTypes.func.isRequired
};

export default NotLoggedIn