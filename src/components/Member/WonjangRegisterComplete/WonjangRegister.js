import React from 'react';

const WonjangRegister = () => {
    return (
        <div id="suppliersign_complete">
            <h1>원장님의 회원가입 신청이 완료되었습니다.</h1>
            <p>고시원 정보 확인 후 승인여부를 문자와 메일로 알려드리겠습니다.</p>
            <input type="button" value="확인" ng-click="go('/')"/>
            <a ng-click="go('/members/edit-wonjang')">신청 내역 수정하기</a>
        </div>
    );
};

export default WonjangRegister;
