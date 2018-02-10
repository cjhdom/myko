import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import KosiwonList from './KosiwonList'
import {getIsLoggedIn, getUserData} from "../../reducers/user";

class KosiwonListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            kosiwonList: [],
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
                {key: 'type', value: listType === 'favorite' ? 'F' : 'V'},
                {key: 'createdBy', value: userData.user_id}
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
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Pragma': 'no-cache',
                    'Cache-Control': 'no-cache'
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

    render() {
        const {success, kosiwonList} = this.state
        if (success) {
            return (
                <KosiwonList/>
            );
        } else {
            return null
        }
    }
}

KosiwonListContainer.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    userData: PropTypes.object.isRequired
};

export default connect(
    state => ({
        isLoggedIn: getIsLoggedIn(state.user),
        userData: getUserData(state.user)
    })
)(KosiwonListContainer);
