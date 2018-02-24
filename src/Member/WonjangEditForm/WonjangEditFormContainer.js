import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import WonjangEditForm from './WonjangEditForm'
import {onWonjangEditClicked, routeTo} from "../../actions";
import {getIsLoggedIn, getIsWonjang, getUserData} from "../../reducers/user";

class WonjangEditFormContainer extends Component {
    constructor(props) {
        super(props)

        const {isWonjang, isLoggedIn} = this.props
        if (!isLoggedIn || !isWonjang) {
            routeTo('/')
        }

        const {userData} = this.props
        this.state = {
            password: '',
            newPassword: '',
            newPasswordConfirm: '',
            phoneNo: userData.phoneNo || '',
            kosiwonName: userData.kosiwonName || '',
            kosiwonAddress: userData.kosiwonAddress || '',
            kosiwonPhoneNo: userData.kosiwonPhoneNo || '',
            registrationNo: userData.registrationNo || ''
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

    async onEditClicked() {
        const {
            password,
            newPassword,
            newPasswordConfirm,
            phoneNo,
            kosiwonName,
            kosiwonAddress,
            kosiwonPhoneNo,
            registrationNo
        } = this.state

        if (this.validationCheck(password, newPassword, newPasswordConfirm, phoneNo, kosiwonName, kosiwonAddress,
                kosiwonPhoneNo, registrationNo)) {
            const {onWonjangEditClicked} = this.props
            const files = document.getElementById('registrationUri').files
            try {
                await onWonjangEditClicked(password, newPassword, newPasswordConfirm, phoneNo, kosiwonName, kosiwonAddress,
                    kosiwonPhoneNo, registrationNo, files)
                this.setState({
                    ...this.state,
                    password: '',
                    newPassword: '',
                    newPasswordConfirm: '',
                })
            } catch (e) {
                console.log(e)
            }
        }
    }

    validationCheck(password, newPassword, newPasswordConfirm, phoneNo, kosiwonName, kosiwonAddress, kosiwonPhoneNo,
                    registrationNo) {
        if (!password) {
            alert('비밀번호는 필수 입력 항목입니다.');
            return false;
        }

        if (newPassword && newPassword !== newPasswordConfirm) {
            alert('비밀번호가 일치하지 않습니다.');
            return false;
        }

        if (!phoneNo) {
            alert('휴대폰번호는 필수 입력 항목입니다.');
            return false;
        }

        if (!kosiwonName) {
            alert('고시원 명은 필수 입력 항목입니다.');
            return false;
        }

        if (!kosiwonAddress) {
            alert('고시원 주소는 필수 입력 항목입니다.');
            return false;
        }

        if (!kosiwonPhoneNo) {
            alert('고시원 전화번호는 필수 입력 항목입니다.');
            return false;
        }

        if (!registrationNo) {
            alert('사업자등록번호는 필수 입력 항목입니다.');
            return false;
        }

        if (registrationNo.length !== 10) {
            alert('사업자등록번호가 유효하지 않습니다.');
            return false;
        }

        return true;
    }

    onFileUploadClicked() {
        document.getElementById('registrationUri').click()
    }

    render() {
        return (
            <WonjangEditForm
                onChanged={this.onChanged.bind(this)}
                onEditClicked={this.onEditClicked.bind(this)}
                onFileUploadClicked={this.onFileUploadClicked}
                {...this.state}
            />
        );
    }
}

WonjangEditFormContainer.propTypes = {};

export default connect(
    state => ({
        isWonjang: getIsWonjang(state.user),
        userData: getUserData(state.user),
        isLoggedIn: getIsLoggedIn(state.user)
    }),
    {
        onWonjangEditClicked,
        routeTo
    }
)(WonjangEditFormContainer);
