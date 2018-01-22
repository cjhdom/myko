import React from 'react'

const EmptyFavorite = () => {
    return (
        <div className="selectedview ng-scope">
            <p>찜한 고시원</p>
            <a>더보기</a>
            <div className="popup ng-hide">
                <p>
                    회원 전용 기능입니다.
                    <br/>
                    로그인 후 이용이 가능합니다.
                    <a className="login">로그인 페이지로</a>
                    <a className="cancel">취소</a>
                </p>
                <div className="cancel">
                </div>
            </div>
            <div className="none">
                <img alt="찜한 고시원이 없습니다." src="www/img/selectedview_none.png"/>
            </div>
        </div>
    )
}

export default EmptyFavorite