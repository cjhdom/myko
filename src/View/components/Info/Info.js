import React from 'react';

const Info = ({
                  floor,
                  isAlarmByKosirock,
                  isAlarmByOnwer,
                  isElevator,
                  isMeal,
                  isParking,
                  isPromotion,
                  isPublic,
                  isReAuctionAlarm,
                  isRestRoom,
                  isSeparate,
                  isWoman,
                  minorAddress,
                  isFavorite,
                  togglePhonePopup,
                  phonePopup
              }) => {
    return (
        <div className="detail_info_dt_option">
            <p>세부 정보</p>
            <dl>
                <hr/>
                <dt>건물 층</dt>
                <dd>{floor} 층</dd>
                <hr/>
                <dt>엘리베이터</dt>
                <dd>{isElevator ? '있음' : '없음'}</dd>
                <hr/>
                <dt>남/여 층</dt>
                <dd>{isSeparate ? '분리' : '??'}</dd>
                <hr/>
                <dt>주차</dt>
                <dd>{isParking ? '가능' : '불가?'}</dd>
                <hr/>
                <dt>식사</dt>
                <dd>{isMeal ? '제공' : '미제공?'}</dd>
                <hr/>
                <dt>화장실</dt>
                <dd>{isRestRoom ? '개별' : '공용?'}</dd>
                <hr/>
                <dt>성별</dt>
                <dd>{isWoman ? '여성전용' : '남여공용?'}</dd>
                <hr/>
                <dt>냉난방 종류</dt>
                <dd>{isPublic ? '중앙냉난방' : '개별?'}</dd>
                <hr/>
            </dl>
        </div>
    );
};

export default Info;
