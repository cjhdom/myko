import React from 'react';
import PropTypes from 'prop-types';

const cursorStyle = {
    cursor: 'pointer'
}


const getListClass = isShowClusterList => isShowClusterList ? '-2px 2px 2px 0 rgba(0,0,0,0.3)' : 'none'
// const getWidth = isShowClusterList => isShowClusterList ? window.width : window.width - 540
const getClusterListImageUri = isShowClusterList => isShowClusterList ? 'img/exit.png' : 'img/plus.png'

const SearchList = ({
                        clusterList,
                        pageNoList,
                        totalPages,
                        pageNo,
                        moveView,
                        goPage,
                        toggleList,
                        isShowClusterList,
                        doToggleClusterList
                    }) => {
    return (
        <div id="list" style={{boxShadow: getListClass(isShowClusterList), zIndex: 1}}>
            <p className="all_view">
                <a style={cursorStyle} onClick={toggleList}>리스트 전체 보기</a>
            </p>
            <p className="close">
                <a style={cursorStyle} onClick={() => doToggleClusterList(!isShowClusterList)}>
                    <img alt="닫기" src={getClusterListImageUri(isShowClusterList)}/>
                </a>
            </p>
            <ul className="thumbnail_list">
                {clusterList.map(data => {
                    return (
                        <li key={data._id}>
                            <a style={cursorStyle} onClick={() => moveView(data._id)}>
                                <div className="thumbnail_img">
                                    {data.thumbnailUri && data.thumbnailUri.length > 0 &&
                                    <img alt="" src={`http://www.kosirock.co.kr/${data.thumbnailUri}`}/>}
                                </div>
                                <div className="thumbnail_info">
                                    <p>{data.kosiwonName}</p>
                                    <p>입실료 {data.priceMin} {data.priceMax}만원</p>
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
                <li><a className={`prev${pageNo > 1 ? ' on' : ''}`} style={cursorStyle}
                       onClick={() => goPage(pageNo - 1)}>이전</a></li>
                {pageNoList.map(currentPageNo => {
                    return (
                        <li className={currentPageNo === pageNo ? 'on' : ''} key={currentPageNo}>
                            <a onClick={() => goPage(currentPageNo)} style={cursorStyle}>{currentPageNo}</a>
                        </li>
                    )
                })}
                <li><a className={`next${pageNo < totalPages ? ' on' : ''}`}
                       style={cursorStyle} onClick={() => goPage(pageNo + 1)}>다음</a></li>
            </ul>
        </div>
    );
};

SearchList.propTypes = {};

export default SearchList;
