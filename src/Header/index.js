import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

import SearchContainer from './components/search/SeachContainer';
import LoginContainer from './components/login/LoginContainer';
import LoginPopupContainer from "./components/loginPopup/LoginPopupContainer";
import MenuContainer from "./components/Menu/MenuContainer";

const cursorStyle = {cursor: 'pointer'};
const displayNoneStyle = {display: 'none'};

class Header extends Component {
    goHome () {
        this.props.history.push('/')
    }

    render() {
        return (
            <div id="header">
                <h1><a style={cursorStyle} onClick={this.goHome.bind(this)}><img alt="kosirock" src="/img/Logo.png"/></a></h1>
                {false && <SearchContainer/>}
                <LoginContainer />
                <MenuContainer/>
                <LoginPopupContainer/>
            </div>
        )
    }
};

export default withRouter(Header);