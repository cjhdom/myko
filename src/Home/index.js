import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import MasterContainer from './components/master/MasterContainer';
import DiaContainer from './components/dia/DiaContainer';
import SearchContainer from './components/search/SearchContainer';
import RecentContainer from "./components/recent/RecentContainer";
import FavoriteContainer from "./components/favorite/FavoriteContainer";

class Home extends Component {
    componentWillMount() {
        document.getElementsByTagName('body')[0].setAttribute('class', 'main');
    }

    render() {
        return (
            <div className="contentWrapper">
                <SearchContainer/>
                <MasterContainer/>
                <DiaContainer/>
                <RecentContainer/>
                <FavoriteContainer/>
            </div>
        );
    }
}

export default Home;