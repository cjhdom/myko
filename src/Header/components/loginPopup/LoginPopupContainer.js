import React from 'react';
import PropTypes from 'prop-types'
import LoginPopup from './LoginPopup';

const LoginPopupContainer = ({loginState, toggleLogin}) => {
    return null;
    /*return (
        <LoginPopup />
    )*/
};

LoginPopupContainer.propTypes = {
    loginState: PropTypes.object.isRequired,
    toggleLogin: PropTypes.func.isRequired
};

export default LoginPopupContainer