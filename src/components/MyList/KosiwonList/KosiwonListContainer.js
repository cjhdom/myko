import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import {getIsLoggedIn, getUserData} from "../../../reducers/user";
import {routeTo} from "../../../actions";
import Kosiwon from "./Kosiwon";

class KosiwonListContainer extends Component {
    constructor(props) {
        super(props)
    }

    async removeRecentAsync(id) {
        try {
            await fetch('http://www.kosirock.co.kr/api/myKosiwons/deleteMulti', {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Pragma': 'no-cache',
                    'Cache-Control': 'no-cache'
                }),
                body: JSON.stringify([id])
            })

            await this.loadData()
        } catch (e) {
            console.log(`error ${e}`)
        }
    }

    async loadData() {
        const {listType, isLoggedIn, userData, routeTo, setParentStateAsync} = this.props
        if (!isLoggedIn) {
            return routeTo('/')
        }

        var option = {
            populateOption: ["kosiwonId"],
            projectOption: {kosiwonId: 1},
            andOption: [
                {key: 'type', value: listType === 'favorite' ? 'F' : 'V'},
                {key: 'createdBy', value: userData._id}
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
                body: JSON.stringify(option)
            })

            const data = await result.json()

            await setParentStateAsync({
                items: data ? data.items.map(a => a.kosiwonId) : [],
                lastIndex: data.items.length,
                pageNoList: data.items.map((item, key) => (key + 1))
            })
        } catch (e) {
            console.log(`error! ${e}`)
        }
    }

    async componentDidMount() {
        await this.loadData()
    }

    render() {
        const {routeTo, items} = this.props
        return (
            items.map((view, i) => {
                return <Kosiwon
                    index={i}
                    key={view.id}
                    kosiwon={view}
                    routeTo={routeTo}
                    removeRecent={this.removeRecentAsync.bind(this)}
                />
            })
        );
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
    }),
    {
        routeTo
    }
)(KosiwonListContainer);
