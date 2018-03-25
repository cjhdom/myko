import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import Login from "./Login";
import {getIsLoggedIn} from "../../reducers/user";
import {withRouter} from 'react-router-dom'
import {doLogin} from '../../actions'
import {onSocialLoginClicked} from "../../actions/index";

class LoginContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        const {isLoggedIn} = this.props
        if (isLoggedIn) {
            this.props.history.push('/')
        }
    }


    handleChange(e) {
        const {id, value} = e.target
        this.setState({
            ...this.state,
            [id]: value
        })
    }

    handleKeyPress(e) {
        if (e.keyCode === 13) {
            this.onLoginClicked()
        }
    }

    onLoginClicked () {
        const {doLogin} = this.props
        const {email, password} = this.state
        doLogin(email, password)
    }

    facebookResponse (res) {
        const {onSocialLoginClicked} = this.props
        onSocialLoginClicked(res.id, res.name, 'F')
    }

    kakaoSuccess (res) {
        const {onSocialLoginClicked} = this.props
        onSocialLoginClicked(res.id, res.nickname, 'K')
    }

    kakaoFail (res) {
        console.log(res)
    }

    render() {
        return (
            <Login
                handleChange={this.handleChange.bind(this)}
                onLoginClicked={this.onLoginClicked.bind(this)}
                handleKeyPress={this.handleKeyPress.bind(this)}
                facebookResponse={this.facebookResponse.bind(this)}
                kakaoSuccess={this.kakaoSuccess.bind(this)}
                kakaoFail={this.kakaoFail.bind(this)}
            />
        );
    }
}

LoginContainer.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    doLogin: PropTypes.func.isRequired
};

export default withRouter(connect(
    state => ({
        isLoggedIn: getIsLoggedIn(state.user)
    }),
    {
        doLogin,
        onSocialLoginClicked
    }
)(LoginContainer));
