import React, {Component} from 'react';

import Dia from './Dia'
import PrevButton from './PrevButton';
import NextButton from './NextButton';
import {chunk} from 'lodash'

import {DiamondList} from "../../../../data/consts";

class DiaContainer extends Component {
    render() {
        const diaList = chunk(DiamondList, 12)
        var settings = {
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
            <Dia
                diaList={diaList}
                settings={settings}
            />
        )
    }
}

export default DiaContainer;