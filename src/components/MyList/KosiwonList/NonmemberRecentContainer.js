import React, {Component} from 'react'
import {connect} from 'react-redux'
import Kosiwon from "./Kosiwon";
import {routeTo} from "../../../actions";
import {reverse} from 'lodash'

const makeArray = (length) => {
    let retArray = []
    let i = 0
    while (i < length) {
        retArray.push(++i)
    }
    return retArray
}

class NonmemberRecentContainer extends Component {
    constructor(props) {
        super(props);
    }

    updateRecent() {
        const recentList = this.getRecentList()
        const length = recentList.length
        this.props.setParentState({
            items: recentList,
            lastIndex: length,
            pageNoList: makeArray(Math.ceil(length / 10))
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
            items.map((view, i) => {
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