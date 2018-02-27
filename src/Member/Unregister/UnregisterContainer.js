import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Unregister from "./Unregister";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {onUnregisterClicked} from "../../actions";
import {getIsLoggedIn, getUserData} from "../../reducers/user";

class UnregisterContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            isAgreed: false
        }

        this.onAgreedClicked = this.onAgreedClicked.bind(this)
        this.onGoBackClicked = this.onGoBackClicked.bind(this)
        this.onUnregisterClicked = this.onUnregisterClicked.bind(this)
    }

    onAgreedClicked (e) {
        const {isAgreed} = this.state
        this.setState({
            ...this.state,
            isAgreed: !isAgreed
        })
    }

    onGoBackClicked () {
        this.props.history.goBack()
    }

    onUnregisterClicked () {
        const {isAgreed} = this.state
        if (!isAgreed) {
            return alert('안내사항에 동의하지 않았습니다.')
        } else {
            const {onUnregisterClicked, userData} = this.props
            onUnregisterClicked(userData._id)
        }
    }

    render() {
        return (
            <Unregister {...this.state}
                        onAgreedClicked={this.onAgreedClicked}
                        onGoBackClicked={this.onGoBackClicked}
                        onUnregisterClicked={this.onUnregisterClicked}/>
        );
    }
}

UnregisterContainer.propTypes = {};

export default withRouter(connect(
    state => ({
        userData: getUserData(state.user),
        isLoggedIn: getIsLoggedIn(state.user)
    }),
    {
        onUnregisterClicked
    }
)(UnregisterContainer));
