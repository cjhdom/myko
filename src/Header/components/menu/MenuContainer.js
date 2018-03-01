import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

import Menu from "./Menu";
import {getIsLoggedIn, getIsWonjang} from "../../../reducers/user";
import {toggleLoginPopup, toggleWonjangPopup} from "../../../actions"

class MenuContainer extends Component {
    onButtonClick(e) {
        const {id} = e.target
        const {isLoggedIn, toggleLoginPopup, toggleWonjangPopup, isWonjang} = this.props
        const {history} = this.props
        if (id === 'recent') {
            history.push('/list/recent')
        } else if (id === 'favorite') {
            if (!isLoggedIn) {
                return toggleLoginPopup()
            } else {
                history.push('/list/favorite')
            }
        } else if (id === 'upload') {
            if (isWonjang) {
                history.push('/members/upload/-1')
            }
        }
    }

    render() {
        return (
            <Menu onButtonClick={this.onButtonClick.bind(this)}/>
        );
    }
}

const reduxComponent = connect(
    state => ({
        isLoggedIn: getIsLoggedIn(state.user),
        isWonjang: getIsWonjang(state.user)
    }),
    {
        toggleLoginPopup,
        toggleWonjangPopup
    }
)(MenuContainer)

export default withRouter(reduxComponent);
