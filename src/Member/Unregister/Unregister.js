import React from 'react';

const Unregister = ({isAgreed, onAgreedClicked, onGoBackClicked, onUnregisterClicked}) => {
    return (
        <div id="unresister">
            <h1>회원 탈퇴</h1>
            <pre>        현재 사용하고 계신 아이디는 탈퇴할 경우 재사용 및 복구가 불가능 합니다.<br/>
        탈퇴 후 회원정보 및 개인형 서비스 이용 기록은 모두 삭제됩니다.<br/>
        탈퇴 후 아이디와 데이터는 복구할 수 없습니다.
        </pre>
            <strong>[필수]</strong>
            <p> 안내사항을 모두 읽었으며 이에 동의합니다.</p>
            <a className={isAgreed ? 'on' : 'off'}
               onClick={onAgreedClicked}>동의</a>
            <ul>
                <li><a onClick={onUnregisterClicked}>회원 탈퇴</a></li>
                <li><a onClick={onGoBackClicked}>취소</a></li>
            </ul>
        </div>
    );
};

export default Unregister;
