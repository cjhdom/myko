import React from 'react';
import {Link} from 'react-router-dom'

const UserEditForm = ({onEditClicked, onChanged, phoneNo}) => {
    return (
        <div id="changeinfo">
            <h1>개인정보 수정</h1>
            <form className="changeinfo">
                <label>비밀번호 변경</label>
                <input type="password" id="password" placeholder="현재 비밀번호." maxLength="15" onChange={onChanged}/>
                <input type="password" id="newPassword" placeholder="새 비밀번호" maxLength="15" onChange={onChanged}/>
                <input type="password" id="newPasswordConfirm" placeholder="새 비밀번호 확인"
                       maxLength="15" onChange={onChanged}/>
                <label>휴대전화번호 변경</label>
                <input type="text" id="phoneNo" placeholder="새 휴대전화번호를 입력해주세요. (-없이)"
                       maxLength="11" value={phoneNo} onChange={onChanged}/>
                <input type="button" value="수정 완료" onClick={onEditClicked}/>
            </form>
            <Link to={'/members/unregister'}>회원탈퇴</Link>
        </div>
    );
};

export default UserEditForm;
