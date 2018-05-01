import React, {Component} from 'react'
import {connect} from 'react-redux'
import Kosiwon from "./Kosiwon";
import {routeTo} from "../../../actions";

class NonmemberRecentContainer extends Component {
    getRecentList() {
        const storageList = localStorage.getItem('recentViewList')
        return storageList ? JSON.parse(storageList) : []
    }

    removeRecent(id, idx) {
        const recentViewList = this.getRecentList()
        if (idx !== 'undefined') {
            recentViewList.splice(idx, 1)
            localStorage.setItem('recentViewList', JSON.stringify(recentViewList))
            this.forceUpdate()
        }
    }

    render() {
        const {routeTo} = this.props
        const recentViewList = this.getRecentList()
        return (
            recentViewList.map((view, i) => {
                return <Kosiwon
                    index={i}
                    key={view.id}
                    kosiwon={view}
                    routeTo={routeTo}
                    removeRecent={this.removeRecent.bind(this)}
                />
            })
        )
    }
}

export default connect(
    () => ({}),
    {
        routeTo
    }
)(NonmemberRecentContainer)