import React, {Component} from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div id="footer">
            <address>
                <span>*서울시 성북구 화랑로 211 성북벤처창업지원센터 306호</span>
                <span>02 - 911 - 9051 (고시락)</span>
                <span>kosirock.winni@gmail.com</span>
            </address>
            <p>Copyright 2015. Winni all right reverved.</p>
            <a href="https://www.facebook.com/kosirock.winni" target="_blank"><img alt="facebook" src="/img/facebook.png" /></a>
            <a href="http://play.google.com/store/apps/details?id=kosirock2.winni.com" target="_blank"><img alt="playstore" src="/img/playstore.png" /></a>
        </div>
    );
};

export default Footer;