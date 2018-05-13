import React, {Component} from 'react';
import PropTypes from 'prop-types';
import daum from 'daum'
import {withRouter} from "react-router";
import {parse} from 'query-string'

class RoadViewContainer extends Component {

    componentDidMount() {
        const {location} = this.props
        const {longitude, latitude} = parse(location.search)
        const roadviewContainer = document.getElementById('roadview'); //로드뷰를 표시할 div
        const roadview = new daum.maps.Roadview(roadviewContainer); //로드뷰 객체
        const roadviewClient = new daum.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체

        const position = new daum.maps.LatLng(latitude, longitude);

        // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
        roadviewClient.getNearestPanoId(position, 50, function (panoId) {
            roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
        });
    }

    render() {
        return (
            <div id="roadview" style={{
                width: '100%',
                height: '900px',
                marginTop: '60px'
            }}/>
        );
    }
}

RoadViewContainer.propTypes = {};

export default withRouter(RoadViewContainer);
