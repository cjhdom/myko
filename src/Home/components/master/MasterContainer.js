import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {chunk} from 'lodash'

import Master from './Master'
import PrevButton from './PrevButton';
import NextButton from './NextButton';

import {MasterList} from '../../../data/consts'

class MasterContainer extends Component {
    moveView (id, fullName) {
        console.log(id, fullName)
    }

    render () {
        const masterList = chunk(MasterList, 8)
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
            lazyLoad: true
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

export default MasterContainer;