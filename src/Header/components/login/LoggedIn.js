import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LoggedIn extends Component {
    constructor() {
        super();
        this.state = {
            isShowMenu: false
        }
    }

    toggleMenu () {
        const isShowMenu = this.state.isShowMenu;
        this.setState(Object.assign({}, this.state, {
            isShowMenu: !isShowMenu
        }));
    }

    render () {
        const {isShowMenu} = this.state;
        const {toggleLogin} = this.props;
        return (
            <li>
                <a onClick={this.toggleMenu.bind(this)} className="normal_m"><span className=""/></a>
                <ul className={`normal_menu${isShowMenu ? ' on' : ''}`} >
                    <li><a>개인정보 수정</a></li>
                    <li><a>내가 올린 고시원</a></li>
                    <li><a onClick={toggleLogin}>로그아웃</a></li>
                </ul>
            </li>
        )
    }
}

LoggedIn.propTypes = {
    toggleLogin: PropTypes.func.isRequired
};

export default LoggedIn