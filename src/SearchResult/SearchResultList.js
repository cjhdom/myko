import React from 'react';

const SearchResultList = ({data}) => {
    /*return (
        <div id="only_list" ng-show="static.isShowClusterList">
            <ul className="thumbnail_list">
                <li ng-repeat="data in static.clusterList">
                    <a style={{cursor: 'pointer'}} ng-click="moveView(data._id, data.kosiwonName))">
                        <div className="thumbnail_img">
                            <img ng-show="data.thumbnailUri && data.thumbnailUri.length>0" alt=""
                                 ng-src="{{ data.thumbnailUri }}"/>
                        </div>
                        <div className="thumbnail_info">
                            <p>{{data.kosiwonName}}</p>
                            <P>입실료 {{data.priceMin}} {{data.priceMax}}만원</P>
                            <p className="info">{{data.intro}}</p>
                            <ul>
                                <li ng-className="data.isParking ? 'on' : ''">주차가능</li>
                                <li ng-className="data.isMeal ? 'on' : ''">식사제공</li>
                                <li ng-className="data.isSeparate ? 'on' : ''">남녀층 분리</li>
                                <li ng-className="data.isRestRoom ? 'on' : ''">개별 화장실</li>
                            </ul>
                        </div>
                    </a>
                </li>
            </ul>
            <ul className="list_number">
                <li><a className="prev" ng-className="static.pageNo>1 ? 'on' : ''" style="cursor:pointer;"
                       ng-click="goPage(static.pageNo-1)">이전</a></li>
                <li ng-repeat="pageNo in static.pageNoList" ng-className="pageNo===static.pageNo ? 'on' : ''">
                    <a ng-click="goPage(pageNo)" style="cursor:pointer;">{{pageNo}}</a>
                </li>
                <li><a className="next" ng-className="static.pageNo<static.totalPages ? 'on' : ''"
                       style="cursor:pointer;" ng-click="goPage(static.pageNo+1)">다음</a></li>
            </ul>
        </div>
    );*/
    return null
};

export default SearchResultList;
