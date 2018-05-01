import React from 'react';
import PropTypes from 'prop-types';

const cursorStyle = {
    cursor: 'pointer'
}

const SearchList = ({clusterList, pageNoList, selectedPageNo, totalPages, moveView, goPage, clusterListImageUri, toggleList, doToggleClusterList}) => {
    return (
        <div id="list" style={{boxShadow: listClass, zIndex: 1}}>
            <p className="all_view" ng-show="static.isShowClusterList">
                <a style={cursorStyle} onClick={toggleList}>리스트 전체 보기</a>
            </p>
            <p className="close">
                <a style={cursorStyle} onClick={doToggleClusterList}>
                    <img alt="닫기" src={clusterListImageUri}/>
                </a>
            </p>
            <ul className="thumbnail_list" ng-if="static.isShowClusterList">
                {clusterList.map(data => {
                    return (
                        <li key={data._id}>
                            <a style={cursorStyle} onClick={null}>
                                <div className="thumbnail_img">
                                    {data.thumbnailUri && data.thumbnailUri.length > 0 &&
                                    <img alt="" src={data.thumbnailUri}/>}
                                </div>
                                <div className="thumbnail_info">
                                    <p>{data.kosiwonName}</p>
                                    <P>입실료 {data.priceMin} {data.priceMax}만원</P>
                                    <p className="info">{data.intro}</p>
                                    <ul>
                                        <li className={data.isParking ? 'on' : ''}>주차가능</li>
                                        <li className={data.isMeal ? 'on' : ''}>식사제공</li>
                                        <li className={data.isSeparate ? 'on' : ''}>남녀층 분리</li>
                                        <li className={data.isRestRoom ? 'on' : ''}>개별 화장실</li>
                                    </ul>
                                </div>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <ul className="list_number">
                <li><a className={`prev${selectedPageNo > 1 ? ' on' : ''}`} style={cursorStyle}
                       onClick={() => goPage(selectedPageNo - 1)}>이전</a></li>
                {pageNoList.map(pageNo => {
                    return (
                        <li className={pageNo === selectedPageNo ? 'on' : ''} key={pageNo}>
                            <a onClick={() => goPage(pageNo)} style={cursorStyle}>{pageNo}</a>
                        </li>
                    )
                })}
                <li><a className={`next${selectedPageNo < totalPages ? ' on' : ''}`}
                       style={cursorStyle} onClick={() => goPage(selectedPageNo + 1)}>다음</a></li>
            </ul>
        </div>
    );
};

SearchList.propTypes = {};

export default SearchList;
