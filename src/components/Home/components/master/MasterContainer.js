import React, {Component} from 'react';
import {chunk, shuffle} from 'lodash'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import Master from './Master'
import PrevButton from './PrevButton';
import NextButton from './NextButton';

import {MasterList} from '../../../../data/consts'
import {routeTo} from "../../../../actions";

class MasterContainer extends Component {
    moveView (id, fullName) {
        this.props.history.push(`/View/${id}`)
        // this.props.routeTo(`/View/${id}`)
    }

    render () {
        console.log('master', MasterList.length)
        const masterList = shuffle(chunk(MasterList, 8).map(_ => {
            return shuffle(_)
        }))
        const settings = {
            dots: false,
            infinite: true,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <PrevButton/>,
            nextArrow: <NextButton/>,
            lazyLoad: true,
            adaptiveHeight: true
        };

        return (
            <Master
                masterList={masterList}
                settings={settings}
                moveView={this.moveView.bind(this)}
            />
        )
    }
}

const connectMe = connect(
    null,
    {
        routeTo
    }
)

const reduxComponent = connectMe(MasterContainer)

export default withRouter(reduxComponent);