import React, {Component} from 'react';
import {Route} from 'react-router'
import {connect} from 'react-redux'
import KosiwonListContainer from "./KosiwonList/KosiwonListContainer";
import ListHeaderContainer from './ListHeader/ListHeaderContainer'
import {getIsLoggedIn} from "../../reducers/user";
import NonmemberRecentContainer from "./KosiwonList/NonmemberRecentContainer";
import BodyFooterContainer from "./BodyFooter/BodyFooterContainer";
import BodyHeader from "./BodyHeader/BodyHeader";

const itemsPerPage = 10
const defaultState = {
    showPopup: false,
    index: 1,
    items: [],
    lastIndex: 1,
    pageNoList: []
}

class MyList extends Component {
    constructor(props) {
        super(props)
        this.state = defaultState
        this.setIndex = this.setIndex.bind(this)
        this.setParentState = this.setParentState.bind(this)
        this.setParentStateAsync = this.setParentStateAsync.bind(this)
    }

    componentWillMount() {
        document.getElementsByTagName('body')[0].setAttribute('class', 'sub_search_list');
    }

    toggleDeletePopup() {
        this.setState({
            ...this.state,
            showPopup: !this.state.showPopup
        })
    }

    async removeRecentList() {
        const {isLoggedIn} = this.props
        const {items} = this.state
        if (isLoggedIn) {
            // todo
            try {
                await fetch('/api/myKosiwons/deleteMulti', {
                    method: 'POST',
                    headers: new Headers({
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Pragma': 'no-cache',
                        'Cache-Control': 'no-cache'
                    }),
                    body: JSON.stringify(items.map(_ => _._id))
                })
                this.setParentStateAsync(defaultState)
            } catch (e) {
                console.log(`error ${e}`)
            }
        } else {
            localStorage.removeItem('recentViewList')
            this.setParentStateAsync(defaultState)
        }
    }

    setIndex(index) {
        this.setState({
            ...this.state,
            index
        })
    }

    setParentState(newState) {
        this.setState({
            ...this.state,
            ...newState
        })
    }

    setParentStateAsync(newState) {
        return new Promise(resolve =>
            resolve(this.setState({...this.state, ...newState}))
        )
    }

    render() {
        const baseUrl = this.props.match.url
        const {isLoggedIn} = this.props
        const {showPopup, index, items, lastIndex, pageNoList} = this.state
        const minIndex = (index - 1) * itemsPerPage
        const propsToPass = {
            index,
            items: items.slice(minIndex, minIndex + itemsPerPage),
            lastIndex,
            pageNoList,
            setParentState: this.setParentState,
            setParentStateAsync: this.setParentStateAsync
        }
        return (
            <div id="contentWrapper">
                <div id="main_search_list">
                    <ListHeaderContainer toggleDeletePopup={this.toggleDeletePopup.bind(this)}/>
                    <div id="only_list">
                        <BodyHeader
                            showPopup={showPopup}
                            toggleDeletePopup={this.toggleDeletePopup.bind(this)}
                            removeRecentList={this.removeRecentList.bind(this)}
                        />
                        <ul className="thumbnail_list">
                            <Route path={`${baseUrl}/favorite`} render={() => (
                                <KosiwonListContainer listType="favorite" {...propsToPass}/>
                            )}/>
                            <Route path={`${baseUrl}/recent`} render={() => {
                                if (isLoggedIn) {
                                    return (<KosiwonListContainer listType="recent" {...propsToPass}/>)
                                } else {
                                    return (<NonmemberRecentContainer {...propsToPass}/>)
                                }
                            }}/>
                        </ul>
                        <BodyFooterContainer setIndex={this.setIndex}
                                             index={index}
                                             lastIndex={lastIndex}
                                             pageNoList={pageNoList}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        isLoggedIn: getIsLoggedIn(state.user)
    })
)(MyList);
