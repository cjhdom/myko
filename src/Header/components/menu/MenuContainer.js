import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

import Menu from "./Menu";
import {getIsLoggedIn, getIsWonjang} from "../../../reducers/user";
import {toggleLoginPopup, toggleWonjangPopup} from "../../../actions"

class MenuContainer extends Component {
    onButtonClick(e) {
        const {id} = e.target
        const {isLoggedIn, toggleLoginPopup, toggleWonjangPopup} = this.props
        if (id === 'recent') {
            const {history} = this.props
            history.push('/list/recent')
        } else if (id === 'favorite') {
            if (!isLoggedIn) {
                return toggleLoginPopup()
            }
        } else if (id === 'upload') {
            if (!isLoggedIn) {
                return toggleWonjangPopup()
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
        toggleLoginPopup: toggleLoginPopup,
        toggleWonjangPopup: toggleWonjangPopup
    }
)(MenuContainer)

export default withRouter(reduxComponent);
