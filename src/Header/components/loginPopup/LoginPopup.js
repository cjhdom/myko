import React from 'react';

const LoginPopup = () => {
    return (<div className="popup">
        <p>
            회원 전용 기능입니다.
            <br/>
            로그인 후 이용이 가능합니다.
            <a className="login">로그인 페이지로</a>
            <a href="#" className="cancel">취소</a>
        </p>
        <div className="cancel">
        </div>
    </div>
    )
};

export default LoginPopup

