import React from 'react';
import {Link} from 'react-router-dom'

const NotLoggedIn = () => {
    return (
        <li>
            <Link to={'/Members/login'}>로그인 / 회원가입</Link>
        </li>
    )
};

export default NotLoggedIn