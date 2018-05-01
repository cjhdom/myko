import React, {Component} from 'react';
import PropTypes from 'prop-types';
import daum from 'daum'

const initMap = (kosiwonName, location) => {
    const container = document.getElementById('kosiwonMap'); //지도를 담을 영역의 DOM 레퍼런스
    const options = { //지도를 생성할 때 필요한 기본 옵션
        center: new daum.maps.LatLng(location[1], location[0]), //지도의 중심좌표.
        level: 4 //지도의 레벨(확대, 축소 정도)
    };
    const map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴

    const marker = new daum.maps.Marker({
        position: new daum.maps.LatLng(location[1], location[0])
    });

    map.setDraggable(true);
    marker.setMap(map);

    const iwContent = '<div style="padding:5px;">' + kosiwonName + '</div>';
    const iwPosition = new daum.maps.LatLng(location[1], location[0]); //인포윈도우 표시 위치입니다

    const infowindow = new daum.maps.InfoWindow({
        position: iwPosition,
        content: iwContent
    });
}

class MapContainer extends Component {

    componentDidMount() {
        const {location, kosiwonName} = this.props
        initMap(kosiwonName, location)
    }

    render() {
        const {kosiwonAddress, location} = this.props
        return (
            <div className="detail_info_map">
                <address>{kosiwonAddress}</address>
                <div className="detail_info_location">
                    <div id="kosiwonMap" align="absmiddle" style={{width: '1000px', height: '400px', zIndex: 0}}/>
                </div>
                <a className="roadview"
                   href={`http://www.kosirock.co.kr/daumJuso/roadview.html?latitude=${location[1]}&longitude=${location[0]}`}
                   target="_blank">로드뷰 보기</a>
            </div>
        );
    }
}

MapContainer.propTypes = {
    kosiwonAddress: PropTypes.string.isRequired,
    kosiwonName: PropTypes.string.isRequired,
    location: PropTypes.array.isRequired
};

export default MapContainer;
