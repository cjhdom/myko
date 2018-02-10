import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import EmptyRecent from "./EmptyRecent";
import {getIsLoggedIn, getUserData} from "../../../reducers/user";

import Recent from "./Recent";
import {withRouter} from "react-router-dom";

class RecentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            data: []
        }
    }

    setStateAsync(data) {
        return new Promise(resolve => {
            this.setState({
                ...this.state,
                ...data
            })
        })
    }

    async componentDidMount() {
        const {isLoggedIn} = this.props
        if (isLoggedIn) {
            const {id} = this.props.userData
            const body = {
                populateOption: [],
                projectOption: {},
                andOption: [
                    {key: 'type', value: 'V'},
                    {key: 'createdBy', value: id}
                ],
                orOption: [],
                sortOption: '-created',
                pageNo: 1,
                pageSize: 10000
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

    onViewMoreClicked () {
        this.props.history.push('/list/recent')
    }

    render() {
        const {isLoggedIn} = this.props

        let showEmptyRecent = true
        let recentViewList = []

        if (isLoggedIn) {
            recentViewList = this.state.data
            if (recentViewList.length > 0) {
                showEmptyRecent = false
            }
        } else if (localStorage.getItem('recentViewList')) {
            showEmptyRecent = false
            recentViewList = JSON.parse(localStorage.getItem('recentViewList'))
            recentViewList = recentViewList.slice(0, 4)
        }

        return (
            <div className="recentlyview">
                <p>최근 본 고시원</p>
                <a onClick={this.onViewMoreClicked.bind(this)}>더보기</a>
                {!showEmptyRecent && <ul className="on" style={{display: 'block'}}>
                    {recentViewList.map((recent, key) => {
                        return (
                            <Recent
                                key={key}
                                {...recent}
                            />
                        )
                    })}
                </ul>}
                {showEmptyRecent && <EmptyRecent/>}
            </div>
        )
    }
}

RecentContainer.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    userData: PropTypes.object.isRequired
}

const reduxComponent = connect(
    state => ({
        isLoggedIn: getIsLoggedIn(state.user),
        userData: getUserData(state.user)
    })
)(RecentContainer)

export default withRouter(reduxComponent)