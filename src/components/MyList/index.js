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

class MyList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showPopup: false,
            index: 1,
            items: [],
            lastIndex: 1,
            pageNoList: []
        }
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

    removeRecentList() {
        const {isLoggedIn} = this.props
        if (isLoggedIn) {

        } else {
            localStorage.removeItem('recentViewList')
        }
        this.setState({
            ...this.state,
            showPopup: false
        })
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
