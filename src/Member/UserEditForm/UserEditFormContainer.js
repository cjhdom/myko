import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import UserEditForm from "./UserEditForm";
import {onUserEditClicked, routeTo} from "../../actions";
import {getIsLoggedIn, getIsWonjang, getUserData} from "../../reducers/user";

class UserEditFormContainer extends Component {
    constructor(props) {
        super(props)

        const {isWonjang, isLoggedIn, routeTo} = this.props
        if (!isLoggedIn) {
            routeTo('/')
        }
        if (isWonjang) {
            routeTo('/members/edit-wonjang')
        }

        const {userData} = this.props
        this.state = {
            password: '',
            newPassword: '',
            newPasswordConfirm: '',
            phoneNo: userData.phoneNo || '',
        }
    }

    onChanged(e) {
        const {id, value} = e.target
        const newState = {}
        newState[id] = value
        this.setState({
            ...this.state,
            ...newState
        })
    }

    onEditClicked() {
        const {
            password,
            newPassword,
            newPasswordConfirm,
            phoneNo
        } = this.state

        if (this.validationCheck(password, newPassword, newPasswordConfirm, phoneNo)) {
            const {onUserEditClicked} = this.props
            onUserEditClicked(password, newPassword, newPasswordConfirm, phoneNo)
        }
    }

    validationCheck(password, newPassword, newPasswordConfirm, phoneNo) {
        if(!password) {
            alert('비밀번호는 필수 입력 항목입니다.');
            return false;
        }

        if(newPassword && newPassword !== newPasswordConfirm) {
            alert('비밀번호가 일치하지 않습니다.');
            return false;
        }

        if(!phoneNo) {
            alert('휴대전화번호는 필수 입력 항목입니다.');
            return false;
        }

        return true
    }

    render() {
        return (
            <UserEditForm
                onChanged={this.onChanged.bind(this)}
                onEditClicked={this.onEditClicked.bind(this)}
                {...this.state}
            />
        );
    }
}

UserEditFormContainer.propTypes = {};

export default connect(
    state => ({
        userData: getUserData(state.user),
        isLoggedIn: getIsLoggedIn(state.user),
        isWonjang: getIsWonjang(state.user)
    }),
    {
        onUserEditClicked
    }
)(UserEditFormContainer);
