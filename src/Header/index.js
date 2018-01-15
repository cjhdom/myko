import React, {Component} from 'react';
import SearchContainer from './components/search/SeachContainer';
import LoginContainer from './components/login/LoginContainer';
import LoginPopupContainer from "./components/loginPopup/LoginPopupContainer";

const cursorStyle = {cursor: 'pointer'};
const displayNoneStyle = {display: 'none'};

class Header extends Component {
    constructor() {
        super();
        this.state = {
            loginInfo: {
                isLoggedIn: false
            }
        }
    }

    toggleLogin() {
        const loginInfo = {
            isLoggedIn: !this.state.loginInfo.isLoggedIn
        };
        this.setState({...this.state, loginInfo})
    }

    isLoggedIn() {
        const {loginInfo} = this.state;
        return loginInfo.isLoggedIn;
    }

    render() {
        return (
            <div id="header">
                <h1><a style={cursorStyle}><img alt="kosirock" src="/img/Logo.png"/></a></h1>
                {false && <SearchContainer/>}
                <LoginContainer loginState={this.state.loginInfo} toggleLogin={this.toggleLogin.bind(this)}/>

                <ul id="gnb">
                    <li>
                        <a style={cursorStyle}>최근 본 고시원</a>
                    </li>
                    <li>
                        <a style={cursorStyle}>찜한 고시원</a>
                    </li>
                    <li className="post">
                        <a style={cursorStyle}>고시원 올리기</a>
                    </li>
                </ul>
                <LoginPopupContainer/>
            </div>
        )
    }
};

export default Header;