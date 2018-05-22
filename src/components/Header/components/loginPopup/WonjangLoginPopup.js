import React from 'react';

const WonjangLoginPopup = ({toggleWonjangPopup}) => {
    return (
        <div className="popup">
            <p>
                원장님이신가요?
                <br/>
                고시원 원장 전용 로그인 후 이용이 가능합니다.
                <a className="login">로그인 페이지로</a>
                <a href="#" className="cancel" onClick={toggleWonjangPopup}>취소</a>
            </p>
            <div className="cancel" onClick={toggleWonjangPopup}/>
        </div>
    );
};

export default WonjangLoginPopup;
