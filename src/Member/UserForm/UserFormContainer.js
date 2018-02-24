import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import UserForm from "./UserForm";
import {onRegisterClicked} from "../../actions";

class UserFormContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            name: '',
            phoneNo: '',
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
            phoneNo
        } = this.state

        if (this.validationCheck(email, password, passwordConfirm, name, phoneNo)) {
            const {onRegisterClicked} = this.props
            onRegisterClicked(email, password, passwordConfirm, name, phoneNo)
        }
    }

    validationCheck(email, password, passwordConfirm, name, phoneNo) {
        if(!email) {
            alert('이메일 주소는 필수 입력 항목입니다.');
            return false;
        }

        if(!password) {
            alert('비밀번호는 필수 입력 항목입니다.');
            return false;
        }

        if(!passwordConfirm) {
            alert('비밀번호 확인은 필수 입력 항목입니다.');
            return false;
        }

        if(password !== passwordConfirm) {
            alert('비밀번호가 일치하지 않습니다.');
            return false;
        }

        if(!name) {
            alert('본인성명은 필수 입력 항목입니다.');
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
            <UserForm
                onChanged={this.onChanged.bind(this)}
                onRegisterClicked={this.onRegisterClicked.bind(this)}
            />
        );
    }
}

UserFormContainer.propTypes = {};

export default connect(
    state => ({}),
    {
        onRegisterClicked
    }
)(UserFormContainer);
