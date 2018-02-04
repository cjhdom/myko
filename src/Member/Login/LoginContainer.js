import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import Login from "./Login";
import {getIsLoggedIn} from "../../reducers/user";
import {withRouter} from 'react-router-dom'
import {doLogin} from '../../actions'

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
        let newState = {}
        newState[id] = value
        this.setState({
            ...this.state,
            ...newState
        })
    }

    onLoginClicked () {
        const {doLogin} = this.props
        const {email, password} = this.state
        doLogin(email, password)
    }

    render() {
        return (
            <Login
                handleChange={this.handleChange.bind(this)}
                onLoginClicked={this.onLoginClicked.bind(this)}
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
        doLogin
    }
)(LoginContainer));
