import React from 'react';

const Map = () => {
    return (
        <div className="detail_info_map">
            <address>서울특별시 관악구 봉천동 1593-1</address>
            <div className="detail_info_location">
                {/*map*/}
            </div>
            <a className="roadview" ng-click="openRoadViewWindow()">로드뷰 보기</a>
        </div>
    );
};

export default Map;

