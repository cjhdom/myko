import React from 'react';
import PropTypes from 'prop-types';

const SearchList = props => {
    return (
        <div id="list" ng-style="{ 'box-shadow': static.listClass, 'z-index': 1 }" ng-if="static.isShowClusterList" className="ng-scope" style="box-shadow: rgba(0, 0, 0, 0.3) -2px 2px 2px 0px; z-index: 1;">
            <p className="all_view" ng-show="static.isShowClusterList">
                <a style="cursor:pointer;" ng-click="static.isShowMap=false">리스트 전체 보기</a>
            </p>
            <p className="close">
                <a style="cursor:pointer;" ng-click="doToggleClusterList(!static.isShowClusterList)">
                    <img alt="닫기" ng-src="www/img/exit.png" src="www/img/exit.png">
                </a>
            </p>
            <!-- ngIf: static.isShowClusterList --><ul className="thumbnail_list ng-scope" ng-if="static.isShowClusterList">
            <!-- ngRepeat: data in static.clusterList --><li ng-repeat="data in static.clusterList" className="ng-scope">
            <a style="cursor:pointer;" ng-click="moveView(data._id, data.kosiwonName)">
                <div className="thumbnail_img">
                    <img ng-show="data.thumbnailUri &amp;&amp; data.thumbnailUri.length>0" alt="" ng-src="/files/kosiwons/58eb25661e0daa8b3bc0f8a4/58eb25661e0daa8b3bc0f8a4_kosiwon_t_undefined.jpg" src="/files/kosiwons/58eb25661e0daa8b3bc0f8a4/58eb25661e0daa8b3bc0f8a4_kosiwon_t_undefined.jpg">
                </div>
                <div className="thumbnail_info">
                    <p className="ng-binding">멀티하우스 종로점</p>
                    <p className="ng-binding">입실료 25∼40만원</p>
                    <p className="info ng-binding">5호선 종로3가역 4,5번출구 도보1분거리에 위치한 멀티하우스 종로점입니다.</p>
                    <ul>
                        <li ng-className="data.isParking ? 'on' : ''">주차가능</li>
                        <li ng-className="data.isMeal ? 'on' : ''" className="on">식사제공</li>
                        <li ng-className="data.isSeparate ? 'on' : ''" className="on">남녀층 분리</li>
                        <li ng-className="data.isRestRoom ? 'on' : ''" className="on">개별 화장실</li>
                    </ul>
                </div>
            </a>
        </li><!-- end ngRepeat: data in static.clusterList --><li ng-repeat="data in static.clusterList" className="ng-scope">
            <a style="cursor:pointer;" ng-click="moveView(data._id, data.kosiwonName)">
                <div className="thumbnail_img">
                    <img ng-show="data.thumbnailUri &amp;&amp; data.thumbnailUri.length>0" alt="" ng-src="/files/kosiwons/57fe101c48b3063022eb5ef4/57fe101c48b3063022eb5ef4_kosiwon_t_undefined.png" src="/files/kosiwons/57fe101c48b3063022eb5ef4/57fe101c48b3063022eb5ef4_kosiwon_t_undefined.png">
                </div>
                <div className="thumbnail_info">
                    <p className="ng-binding">솔 리빙텔 </p>
                    <p className="ng-binding">입실료 42∼47만원</p>
                    <p className="info ng-binding">1호선 종각역 12번출구/종각 젊음의 거리에 위치한 솔 리빙텔입니다.</p>
                    <ul>
                        <li ng-className="data.isParking ? 'on' : ''">주차가능</li>
                        <li ng-className="data.isMeal ? 'on' : ''" className="on">식사제공</li>
                        <li ng-className="data.isSeparate ? 'on' : ''">남녀층 분리</li>
                        <li ng-className="data.isRestRoom ? 'on' : ''" className="on">개별 화장실</li>
                    </ul>
                </div>
            </a>
        </li><!-- end ngRepeat: data in static.clusterList --><li ng-repeat="data in static.clusterList" className="ng-scope">
            <a style="cursor:pointer;" ng-click="moveView(data._id, data.kosiwonName)">
                <div className="thumbnail_img">
                    <img ng-show="data.thumbnailUri &amp;&amp; data.thumbnailUri.length>0" alt="" ng-src="/files/kosiwons/5880ede9f71a10e46237d1a1/5880ede9f71a10e46237d1a1_kosiwon_t_undefined.jpg" src="/files/kosiwons/5880ede9f71a10e46237d1a1/5880ede9f71a10e46237d1a1_kosiwon_t_undefined.jpg">
                </div>
                <div className="thumbnail_info">
                    <p className="ng-binding">쏘울레지던스 종로점</p>
                    <p className="ng-binding">입실료 36∼50만원</p>
                    <p className="info ng-binding">종로3가역 15번출구에서 도보3분거리에 위치한 쏘울레지던스 종로점입니다.</p>
                    <ul>
                        <li ng-className="data.isParking ? 'on' : ''">주차가능</li>
                        <li ng-className="data.isMeal ? 'on' : ''" className="on">식사제공</li>
                        <li ng-className="data.isSeparate ? 'on' : ''">남녀층 분리</li>
                        <li ng-className="data.isRestRoom ? 'on' : ''" className="on">개별 화장실</li>
                    </ul>
                </div>
            </a>
        </li><!-- end ngRepeat: data in static.clusterList --><li ng-repeat="data in static.clusterList" className="ng-scope">
            <a style="cursor:pointer;" ng-click="moveView(data._id, data.kosiwonName)">
                <div className="thumbnail_img">
                    <img ng-show="data.thumbnailUri &amp;&amp; data.thumbnailUri.length>0" alt="" ng-src="/files/kosiwons/57fe101c48b3063022eb5ef1/57fe101c48b3063022eb5ef1_kosiwon_t_undefined.jpg" src="/files/kosiwons/57fe101c48b3063022eb5ef1/57fe101c48b3063022eb5ef1_kosiwon_t_undefined.jpg">
                </div>
                <div className="thumbnail_info">
                    <p className="ng-binding">굿모닝럭스텔</p>
                    <p className="ng-binding">입실료 33∼45만원</p>
                    <p className="info ng-binding">1호선 종로3가역 15번출구에서 3분거리에 위치한 굿모닝럭스 텔입니다.</p>
                    <ul>
                        <li ng-className="data.isParking ? 'on' : ''">주차가능</li>
                        <li ng-className="data.isMeal ? 'on' : ''" className="on">식사제공</li>
                        <li ng-className="data.isSeparate ? 'on' : ''">남녀층 분리</li>
                        <li ng-className="data.isRestRoom ? 'on' : ''" className="on">개별 화장실</li>
                    </ul>
                </div>
            </a>
        </li><!-- end ngRepeat: data in static.clusterList --><li ng-repeat="data in static.clusterList" className="ng-scope">
            <a style="cursor:pointer;" ng-click="moveView(data._id, data.kosiwonName)">
                <div className="thumbnail_img">
                    <img ng-show="data.thumbnailUri &amp;&amp; data.thumbnailUri.length>0" alt="" ng-src="/files/kosiwons/58eb40eb1e0daa8b3bc0f8ad/58eb40eb1e0daa8b3bc0f8ad_kosiwon_t_undefined.jpg" src="/files/kosiwons/58eb40eb1e0daa8b3bc0f8ad/58eb40eb1e0daa8b3bc0f8ad_kosiwon_t_undefined.jpg">
                </div>
                <div className="thumbnail_info">
                    <p className="ng-binding">엘리트 레지던스</p>
                    <p className="ng-binding">입실료 45∼55만원</p>
                    <p className="info ng-binding">종로3가역 15번출구 도보3분거리에 위치한 엘리트 레지던스입니다.</p>
                    <ul>
                        <li ng-className="data.isParking ? 'on' : ''">주차가능</li>
                        <li ng-className="data.isMeal ? 'on' : ''" className="on">식사제공</li>
                        <li ng-className="data.isSeparate ? 'on' : ''">남녀층 분리</li>
                        <li ng-className="data.isRestRoom ? 'on' : ''" className="on">개별 화장실</li>
                    </ul>
                </div>
            </a>
        </li><!-- end ngRepeat: data in static.clusterList --><li ng-repeat="data in static.clusterList" className="ng-scope">
            <a style="cursor:pointer;" ng-click="moveView(data._id, data.kosiwonName)">
                <div className="thumbnail_img">
                    <img ng-show="data.thumbnailUri &amp;&amp; data.thumbnailUri.length>0" alt="" ng-src="/files/kosiwons/57fe101c48b3063022eb5ef5/57fe101c48b3063022eb5ef5_kosiwon_t_undefined.jpg" src="/files/kosiwons/57fe101c48b3063022eb5ef5/57fe101c48b3063022eb5ef5_kosiwon_t_undefined.jpg">
                </div>
                <div className="thumbnail_info">
                    <p className="ng-binding">종로 웰빙텔 </p>
                    <p className="ng-binding">입실료 30∼50만원</p>
                    <p className="info ng-binding">종각역 4번출구/종각 젊음의 거리에 위치한 종로 웰빙텔입니다.</p>
                    <ul>
                        <li ng-className="data.isParking ? 'on' : ''">주차가능</li>
                        <li ng-className="data.isMeal ? 'on' : ''" className="on">식사제공</li>
                        <li ng-className="data.isSeparate ? 'on' : ''">남녀층 분리</li>
                        <li ng-className="data.isRestRoom ? 'on' : ''" className="on">개별 화장실</li>
                    </ul>
                </div>
            </a>
        </li><!-- end ngRepeat: data in static.clusterList --><li ng-repeat="data in static.clusterList" className="ng-scope">
            <a style="cursor:pointer;" ng-click="moveView(data._id, data.kosiwonName)">
                <div className="thumbnail_img">
                    <img ng-show="data.thumbnailUri &amp;&amp; data.thumbnailUri.length>0" alt="" ng-src="/files/kosiwons/58eb2ba41e0daa8b3bc0f8a5/58eb2ba41e0daa8b3bc0f8a5_kosiwon_t_undefined.jpg" src="/files/kosiwons/58eb2ba41e0daa8b3bc0f8a5/58eb2ba41e0daa8b3bc0f8a5_kosiwon_t_undefined.jpg">
                </div>
                <div className="thumbnail_info">
                    <p className="ng-binding">수 원룸텔</p>
                    <p className="ng-binding">입실료 40∼50만원</p>
                    <p className="info ng-binding">종로3가역 15번출구 도보3분거리에 위치한 수 원룸텔</p>
                    <ul>
                        <li ng-className="data.isParking ? 'on' : ''">주차가능</li>
                        <li ng-className="data.isMeal ? 'on' : ''" className="on">식사제공</li>
                        <li ng-className="data.isSeparate ? 'on' : ''">남녀층 분리</li>
                        <li ng-className="data.isRestRoom ? 'on' : ''" className="on">개별 화장실</li>
                    </ul>
                </div>
            </a>
        </li><!-- end ngRepeat: data in static.clusterList --><li ng-repeat="data in static.clusterList" className="ng-scope">
            <a style="cursor:pointer;" ng-click="moveView(data._id, data.kosiwonName)">
                <div className="thumbnail_img">
                    <img ng-show="data.thumbnailUri &amp;&amp; data.thumbnailUri.length>0" alt="" ng-src="/files/kosiwons/58eb1e6c1e0daa8b3bc0f8a2/58eb1e6c1e0daa8b3bc0f8a2_kosiwon_t_undefined.jpg" src="/files/kosiwons/58eb1e6c1e0daa8b3bc0f8a2/58eb1e6c1e0daa8b3bc0f8a2_kosiwon_t_undefined.jpg">
                </div>
                <div className="thumbnail_info">
                    <p className="ng-binding">레지던스Q</p>
                    <p className="ng-binding">입실료 38∼40만원</p>
                    <p className="info ng-binding">종각역 4번출구 도보1분거리에 위치한 레지던스Q입니다.</p>
                    <ul>
                        <li ng-className="data.isParking ? 'on' : ''">주차가능</li>
                        <li ng-className="data.isMeal ? 'on' : ''" className="on">식사제공</li>
                        <li ng-className="data.isSeparate ? 'on' : ''">남녀층 분리</li>
                        <li ng-className="data.isRestRoom ? 'on' : ''" className="on">개별 화장실</li>
                    </ul>
                </div>
            </a>
        </li><!-- end ngRepeat: data in static.clusterList --><li ng-repeat="data in static.clusterList" className="ng-scope">
            <a style="cursor:pointer;" ng-click="moveView(data._id, data.kosiwonName)">
                <div className="thumbnail_img">
                    <img ng-show="data.thumbnailUri &amp;&amp; data.thumbnailUri.length>0" alt="" ng-src="/files/kosiwons/58eb4e841e0daa8b3bc0f8b1/58eb4e841e0daa8b3bc0f8b1_kosiwon_t_undefined.jpg" src="/files/kosiwons/58eb4e841e0daa8b3bc0f8b1/58eb4e841e0daa8b3bc0f8b1_kosiwon_t_undefined.jpg">
                </div>
                <div className="thumbnail_info">
                    <p className="ng-binding">이삭리빙텔 종로3가점</p>
                    <p className="ng-binding">입실료 35∼55만원</p>
                    <p className="info ng-binding">종로3가역 14번출구 도보30초거리에 위치한 이삭 리빙텔입니다.</p>
                    <ul>
                        <li ng-className="data.isParking ? 'on' : ''">주차가능</li>
                        <li ng-className="data.isMeal ? 'on' : ''" className="on">식사제공</li>
                        <li ng-className="data.isSeparate ? 'on' : ''">남녀층 분리</li>
                        <li ng-className="data.isRestRoom ? 'on' : ''" className="on">개별 화장실</li>
                    </ul>
                </div>
            </a>
        </li><!-- end ngRepeat: data in static.clusterList --><li ng-repeat="data in static.clusterList" className="ng-scope">
            <a style="cursor:pointer;" ng-click="moveView(data._id, data.kosiwonName)">
                <div className="thumbnail_img">
                    <img ng-show="data.thumbnailUri &amp;&amp; data.thumbnailUri.length>0" alt="" ng-src="/files/kosiwons/5880f13df71a10e46237d1b1/5880f13df71a10e46237d1b1_kosiwon_t_undefined.jpg" src="/files/kosiwons/5880f13df71a10e46237d1b1/5880f13df71a10e46237d1b1_kosiwon_t_undefined.jpg">
                </div>
                <div className="thumbnail_info">
                    <p className="ng-binding">베스트리빙텔 종각점</p>
                    <p className="ng-binding">입실료 35∼55만원</p>
                    <p className="info ng-binding">종각 젊음의 거리에 위치한 베스트리빙텔 종각점입니다.</p>
                    <ul>
                        <li ng-className="data.isParking ? 'on' : ''">주차가능</li>
                        <li ng-className="data.isMeal ? 'on' : ''" className="on">식사제공</li>
                        <li ng-className="data.isSeparate ? 'on' : ''">남녀층 분리</li>
                        <li ng-className="data.isRestRoom ? 'on' : ''" className="on">개별 화장실</li>
                    </ul>
                </div>
            </a>
        </li><!-- end ngRepeat: data in static.clusterList -->
        </ul><!-- end ngIf: static.isShowClusterList -->
            <ul className="list_number" ng-show="static.isShowClusterList">
                <li><a className="prev" ng-className="static.pageNo>1 ? 'on' : ''" style="cursor:pointer;" ng-click="goPage(static.pageNo-1)">이전</a></li>
                <!-- ngRepeat: pageNo in static.pageNoList --><li ng-repeat="pageNo in static.pageNoList" ng-className="pageNo===static.pageNo ? 'on' : ''" className="ng-scope on">
                <a ng-click="goPage(pageNo)" style="cursor:pointer;" className="ng-binding">1</a>
            </li>
                <li><a className="next on" ng-className="static.pageNo<static.totalPages ? 'on' : ''" style="cursor:pointer;" ng-click="goPage(static.pageNo+1)">다음</a></li>
            </ul>
        </div>
    );
};

MyComponent.propTypes = {

};

export default MyComponent;
