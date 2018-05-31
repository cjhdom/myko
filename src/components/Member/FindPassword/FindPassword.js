import React from 'react';
import {Link} from "react-router-dom";

const FindPassword = ({
                          showPopup,
                          requestMail,
                          email,
                          closePopup,
                          onChange
                      }) => {
    return (
        <div className="top_line">
            <div id="findpassword">
                <h1>비밀번호 찾기</h1>
                <form className="id_confirm">
                    <input type="email" name="id_confirm" id="email" placeholder="이메일(아이디)을 입력해주세요."
                           value={email} onChange={onChange}/>
                    <input style={{cursor: 'pointer'}} type="button" name="confirm" value="임시 비밀번호 발송"
                           onClick={requestMail}/>
                </form>
                <Link style={{cursor: 'pointer'}} to="/members/login">로그인 페이지로</Link>
                {showPopup && <div className="popup" style={{display: 'block'}}>
                    <p>
                        임시 비밀번호가 발송되었습니다.
                        <br/>
                        메일을 확인해 주세요.
                        <a onClick={closePopup}>확인</a>
                    </p>
                    <div className="cancel">
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default FindPassword;
