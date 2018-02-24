import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {getIsWonjang, getUserData} from "../../../reducers/user";
import {logout, routeTo} from "../../../actions";

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

    editUser () {
        const {isWonjang, routeTo} = this.props
        this.toggleMenu()
        isWonjang ? routeTo('/members/edit-wonjang') : routeTo('/members/edit-user')
    }

    myKosiwon () {

    }

    render () {
        const {isShowMenu} = this.state;
        const {logout, userData, isWonjang} = this.props;
        return (
            <li>
                <a onClick={this.toggleMenu.bind(this)} className="normal_m">{userData.name}<span className=""/></a>
                <ul className={`normal_menu${isShowMenu ? ' on' : ''}`} >
                    <li><a onClick={this.editUser.bind(this)}>개인정보 수정</a></li>
                    {isWonjang && <li><a>내가 올린 고시원</a></li>}
                    <li><a onClick={logout}>로그아웃</a></li>
                </ul>
            </li>
        )
    }
}

LoggedIn.propTypes = {
    toggleLogin: PropTypes.func.isRequired,
    userData: PropTypes.object.isRequired
};

export default connect(
    state => ({
        isWonjang: getIsWonjang(state.user),
        userData: getUserData(state.user)
    }),
    {
        logout,
        routeTo
    }
)(LoggedIn)