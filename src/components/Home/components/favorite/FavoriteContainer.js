import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import EmptyFavorite from './EmptyFavorite'
import {toggleLoginPopup} from "../../../../actions";
import {getIsLoggedIn, getUserData} from "../../../../reducers/user";
import Favorite from "./Favorite";
import {withRouter} from "react-router-dom";

class FavoriteContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            success: false
        }
    }

    setStateAsync(newState) {
        return new Promise(resolve =>
            resolve(this.setState({...this.state, ...newState}))
        )
    }

    async componentDidMount() {
        const {isLoggedIn} = this.props
        if (isLoggedIn) {
            const {id} = this.props.userData
            const body = {
                populateOption: ['kosiwonId'],
                projectOption: {
                    kosiwonId: 1
                },
                andOption: [
                    {key: 'type', value: 'F'},
                    {key: 'createdBy', value: id}
                ],
                orOption: [],
                sortOption: '-created',
                pageNo: 1,
                pageSize: 4
            }
            try {
                const result = await fetch('http://www.kosirock.co.kr/api/myKosiwons/listBySearchOption', {
                    method: 'POST',
                    headers: new Headers({
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Pragma': 'no-cache',
                        'Cache-Control': 'no-cache'
                    }),
                    body: JSON.stringify(body)
                })

                const data = await result.json()

                await this.setStateAsync({
                    success: true,
                    data: data ? data.items.map(a => a.kosiwonId) : []
                })
            } catch (e) {
                console.log(`error: ${e}`)
            }
        }
    }

    onViewMoreClicked() {
        const {isLoggedIn, toggleLoginPopup, history} = this.props
        if (isLoggedIn) {
            history.push('/list/favorite')
        } else {
            toggleLoginPopup()
        }
    }

    render() {
        const {isLoggedIn, toggleLoginPopup} = this.props
        const {data} = this.state
        return (
            <div className="selectedview">
                <p>찜한 고시원</p>
                <a onClick={this.onViewMoreClicked.bind(this)}>더보기</a>
                {isLoggedIn && data.length > 0 && <ul className="on" style={{display: 'block'}}>
                    {data.map((recent, key) => {
                        return (
                            <Favorite
                                key={key}
                                {...recent}
                            />
                        )
                    })}
                </ul>}
                {(!isLoggedIn || data.length === 0) && <EmptyFavorite
                    toggleLoginPopup={toggleLoginPopup}/>}
            </div>
        )
    }
}

FavoriteContainer.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    userData: PropTypes.object.isRequired,
    toggleLoginPopup: PropTypes.func.isRequired
}

const reduxComponent = connect(
    state => ({
        isLoggedIn: getIsLoggedIn(state.user),
        userData: getUserData(state.user)
    }),
    {
        toggleLoginPopup: toggleLoginPopup
    }
)(FavoriteContainer)

export default withRouter(reduxComponent)