import React from 'react'

const EmptyRecent = () => {
    return (
        <div className="recentlyview ng-scope">
            <p>최근 본 고시원</p>
            <a>더보기</a>
            <div className="none">
                <img alt="찜한 고시원이 없습니다." src="www/img/recentlyview_none.png"/>
            </div>
        </div>
    )
}

export default EmptyRecent
