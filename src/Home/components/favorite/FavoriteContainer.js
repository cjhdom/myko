import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import EmptyFavorite from './EmptyFavorite'
import {toggleLoginPopup} from "../../../actions";
import {getIsLoggedIn, getUserData} from "../../../reducers/user";

class FavoriteContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            success: false
        }
    }

    setStateAsync(newState) {
        return new Promise(resolve =>
            resolve(this.setState({...this.state, ...newState}))
        )
    }

    async componentDidMount() {
        const {listType, isLoggedIn, userData} = this.props
        if (!isLoggedIn) {
            return
        }

        var option = {
            populateOption: [],
            projectOption: {},
            andOption: [
                {key: 'type', value: 'F'},
                {key: 'createdBy', value: userData.id}
            ],
            orOption: [],
            sortOption: '-created',
            pageNo: 1,
            pageSize: 10000
        }

        try {
            const data = await fetch('http://www.kosirock.co.kr/api/myKosiwons/listBySearchOption', {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json, text/plain, */*'
                }),
                body: JSON.stringify(option)
            })

            await this.setStateAsync({
                success: true,
                data: await data.json()
            })
        } catch (e) {
            console.log(`error! ${e}`)
        }
    }

    render () {
        const {isLoggedIn} = this.props
        const {data} = this.state
        if (!isLoggedIn || !data) {
            return <EmptyFavorite />
        } else {
            return <EmptyFavorite />
        }
    }
}

FavoriteContainer.props = {
    isLoggedIn: PropTypes.bool.isRequired,
    userData: PropTypes.object.isRequired,
    toggleLoginPopup: PropTypes.func.isRequired
}

export default connect(
    state => ({
        isLoggedIn: getIsLoggedIn(state.user),
        userData: getUserData(state.user)
    }),
    {
        toggleLoginPopup: toggleLoginPopup
    }
)(FavoriteContainer)