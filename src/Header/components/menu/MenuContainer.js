import React, {Component} from 'react';
import {connect} from 'react-redux';
import Menu from "./Menu";
import {getIsLoggedIn, getIsWonjang} from "../../../reducers/user";
import {toggleLoginPopup, toggleWonjangPopup} from "../../../actions"

class MenuContainer extends Component {
    onButtonClick(e) {
        const {id} = e.target
        const {isLoggedIn, toggleLoginPopup, toggleWonjangPopup} = this.props
        if (id === 'recent') {
            if (!isLoggedIn) {
                return toggleLoginPopup()
            }
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

export default connect(
    state => ({
        isLoggedIn: getIsLoggedIn(state.user),
        isWonjang: getIsWonjang(state.user)
    }),
    {
        toggleLoginPopup: toggleLoginPopup,
        toggleWonjangPopup: toggleWonjangPopup
    }
)(MenuContainer);
