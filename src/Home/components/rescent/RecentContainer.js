import React, {Component} from 'react'
import {connect} from 'react-redux'
import EmptyRecent from "./EmptyRecent";
import {getIsLoggedIn} from "../../../reducers/user";
import {toggleLoginPopup} from "../../../actions";

class RecentContainer extends Component {
    render () {
        return <EmptyRecent />
    }
}

export default connect(
    state => ({
        isLoggedIn: getIsLoggedIn(state.user)
    }),
    {
        toggleLoginPopup: toggleLoginPopup
    }
)(RecentContainer)