import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import WonjangForm from './WonjangForm'
import {onWonjangRegisterClicked, routeTo} from "../../../actions";
import {getIsLoggedIn, getIsWonjang, getUserData} from "../../../reducers/user";

class WonjangFormContainer extends Component {
    constructor(props) {
        super(props)

        const {isLoggedIn} = this.props
        if (isLoggedIn) {
            routeTo('/')
        }

        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            name: '',
            phoneNo: '',
            kosiwonName: '',
            kosiwonAddress: '',
            kosiwonPhoneNo: '',
            registrationNo: ''
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

    onRegisterClicked() {
        const {
            email,
            password,
            passwordConfirm,
            name,
            phoneNo,
            kosiwonName,
            kosiwonAddress,
            kosiwonPhoneNo,
            registrationNo
        } = this.state

        if (this.validationCheck(email, name, password, passwordConfirm, phoneNo, kosiwonName, kosiwonAddress,
                kosiwonPhoneNo, registrationNo)) {
            const {onWonjangRegisterClicked} = this.props
            const files = document.getElementById('registrationUri').files
            onWonjangRegisterClicked(email, password, passwordConfirm, name, phoneNo, kosiwonName, kosiwonAddress,
                kosiwonPhoneNo, registrationNo, files)
        }
    }

    validationCheck(email, name, password, passwordConfirm, phoneNo, kosiwonName, kosiwonAddress, kosiwonPhoneNo,
                    registrationNo) {
        if (!email) {
            alert('이메일 주소는 필수 입력 항목입니다.');
            return false;
        }

        if (!name) {
            alert('사용자 이름은 필수 입력 항목입니다.');
            return false;
        }

        if (!password) {
            alert('비밀번호는 필수 입력 항목입니다.');
            return false;
        }

        if (!passwordConfirm) {
            alert('비밀번호 확인은 필수 입력 항목입니다.');
            return false;
        }

        if (password !== passwordConfirm) {
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
            <WonjangForm
                onChanged={this.onChanged.bind(this)}
                onRegisterClicked={this.onRegisterClicked.bind(this)}
                onFileUploadClicked={this.onFileUploadClicked}
                {...this.state}
            />
        );
    }
}

WonjangFormContainer.propTypes = {};

export default connect(
    state => ({
        isWonjang: getIsWonjang(state.user),
        userData: getUserData(state.user),
        isLoggedIn: getIsLoggedIn(state.user)
    }),
    {
        onWonjangRegisterClicked,
        routeTo
    }
)(WonjangFormContainer);
