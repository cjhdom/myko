import React, {Component} from 'react';
import {Route} from 'react-router'
import {connect} from 'react-redux'
import KosiwonListContainer from "./KosiwonList/KosiwonListContainer";
import ListHeaderContainer from './ListHeader/ListHeaderContainer'
import {getIsLoggedIn} from "../reducers/user";
import NonmemberRecentContainer from "./KosiwonList/NonmemberRecentContainer";
import BodyHeaderContainer from "./BodyHeader/BodyHeaderContainer";
import BodyFooterContainer from "./BodyFooter/BodyFooterContainer";

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
    render() {
        const baseUrl = this.props.match.url
        const {isLoggedIn} = this.props
        return (
            <div id="contentWrapper">
                <div id="main_search_list">
                    <ListHeaderContainer/>
                    <div id="only_list">
                        <BodyHeaderContainer/>
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
