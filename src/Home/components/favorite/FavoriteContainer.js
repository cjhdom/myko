import React, {Component} from 'react'
import {connect} from 'react-redux'
import EmptyFavorite from './EmptyFavorite'
import {toggleLoginPopup} from "../../../actions";
import {getIsLoggedIn} from "../../../reducers/user";

class FavoriteContainer extends Component {
    render () {
        return <EmptyFavorite />
    }
}

export default connect(
    state => ({
        isLoggedIn: getIsLoggedIn(state.user)
    }),
    {
        toggleLoginPopup: toggleLoginPopup
    }
)(FavoriteContainer)