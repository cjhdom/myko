import React, {Component} from 'react';
import {Route} from 'react-router'
import {connect} from 'react-redux'
import KosiwonListContainer from "./KosiwonList/KosiwonListContainer";
import ListHeaderContainer from './ListHeader/ListHeaderContainer'
import {getIsLoggedIn} from "../reducers/user";
import NonmemberRecentContainer from "./KosiwonList/NonmemberRecentContainer";
import BodyFooterContainer from "./BodyFooter/BodyFooterContainer";
import BodyHeader from "./BodyHeader/BodyHeader";

const FavoriteList = () =>
    <KosiwonListContainer listType="favorite"/>

const RecentList = (isLoggedIn) => () => {
    if (isLoggedIn) {
        return (<KosiwonListContainer listType="recent"/>)
    } else {
        return (<NonmemberRecentContainer/>)
    }
}

class MyList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showPopup: false
        }
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

    render() {
        const baseUrl = this.props.match.url
        const {isLoggedIn} = this.props
        const {showPopup} = this.state
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
                            <Route path={`${baseUrl}/favorite`} component={FavoriteList}/>
                            <Route path={`${baseUrl}/recent`} component={RecentList(isLoggedIn)}/>
                        </ul>
                        <BodyFooterContainer/>
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
