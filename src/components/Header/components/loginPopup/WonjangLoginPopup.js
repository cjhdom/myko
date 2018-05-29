import React from 'react';
import {Link} from 'react-router-dom'

const WonjangLoginPopup = ({toggleWonjangPopup}) => {
    return (
        <div className="popup">
            <p>
                원장님이신가요?
                <br/>
                고시원 원장 전용 로그인 후 이용이 가능합니다.
                <Link to="/Members/login" onClick={toggleWonjangPopup} className="login">로그인 페이지로</Link>
                <a href="#" className="cancel" onClick={toggleWonjangPopup}>취소</a>
            </p>
            <div className="cancel" onClick={toggleWonjangPopup}/>
        </div>
    );
};

export default WonjangLoginPopup;
