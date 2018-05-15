import React, {Component} from 'react'
import {connect} from 'react-redux'
import Kosiwon from "./Kosiwon";
import {routeTo} from "../../../actions";
import {reverse} from 'lodash'

class NonmemberRecentContainer extends Component {
    constructor(props) {
        super(props);
    }

    updateRecent() {
        const recentList = this.getRecentList()
        this.props.setParentState({
            items: recentList,
            lastIndex: recentList.length,
            pageNoList: recentList.map((item, key) => (key + 1))
        })
    }

    componentDidMount() {
        this.updateRecent()
    }


    getRecentList() {
        const storageList = localStorage.getItem('recentViewList')
        return storageList ? JSON.parse(storageList) : []
    }

    removeRecent(id, idx) {
        const recentViewList = this.getRecentList()
        if (idx !== 'undefined') {
            recentViewList.splice(idx, 1)
            localStorage.setItem('recentViewList', JSON.stringify(recentViewList))
            this.updateRecent()
        }
    }

    render() {
        const {routeTo, items} = this.props
        return (
            reverse(items).map((view, i) => {
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