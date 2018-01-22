import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import MasterContainer from './components/master/MasterContainer';
import DiaContainer from './components/dia/DiaContainer';
import SearchContainer from './components/search/SearchContainer';
import RecentContainer from "./components/rescent/RecentContainer";
import FavoriteContainer from "./components/favorite/FavoriteContainer";

class Home extends Component {
    render() {

        return (
            <div className="wrapper">
                <div className="contentWrapper">
                    <SearchContainer/>
                    <MasterContainer/>
                    <DiaContainer/>
                    <RecentContainer/>
                    <FavoriteContainer/>
                </div>
            </div>
        );
    }
}

export default Home;