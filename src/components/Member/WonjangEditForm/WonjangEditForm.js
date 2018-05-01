import React from 'react';
import {Link} from 'react-router-dom'

const WonjangEditForm = ({
                             onEditClicked,
                             onChanged,
                             onFileUploadClicked,
                             email,
                             name,
                             phoneNo,
                             kosiwonName,
                             kosiwonAddress,
                             kosiwonPhoneNo,
                             registrationNo,
                             password,
                             newPassword,
                             newPasswordConfirm
                         }) => {
    return (
        <div id="changeinfo_supplier">
            <h1>개인정보 수정</h1>
            <form className="changeinfo">
                <input type="password" id="password" placeholder="현재 비밀번호" maxLength="15" onChange={onChanged}
                       value={password}/>
                <input type="password" id="newPassword" placeholder="새 비밀번호" maxLength="15" onChange={onChanged}
                       value={newPassword}/>
                <input type="password" id="newPasswordConfirm" placeholder="비밀번호" maxLength="15" onChange={onChanged}
                       value={newPasswordConfirm}/>
                <label>휴대전화번호 변경</label>
                <input type="text" id="phoneNo" placeholder="새 휴대전화번호를 입력해주세요. (-없이)" maxLength="11"
                       onChange={onChanged} value={phoneNo}/>
            </form>
            <form className="roominfo">
                <label>고시원 정보 입력</label>
                <input type="text" id="kosiwonName" placeholder="고시원 명을 입력해주세요." maxLength="16" onChange={onChanged}
                       value={kosiwonName}/>
                <input type="text" id="kosiwonAddress" placeholder="고시원 주소를 입력해주세요." onChange={onChanged}
                       value={kosiwonAddress}/>
                <input type="text" id="kosiwonPhoneNo" placeholder="고시원 전화번호를 입력해주세요. (-없이)"
                       maxLength="12" onChange={onChanged} value={kosiwonPhoneNo}/>
                <label>사업자 등록번호</label>
                <input type="text" id="registrationNo" placeholder="사업자 등록번호를 입력해주세요. (-없이)"
                       maxLength="10" onChange={onChanged} value={registrationNo}/>
                <input type="button" value="사업자 등록증 첨부" onClick={onFileUploadClicked}/>
                <input type="file" id="registrationUri" style={{display: 'none'}}/>
                {/*<label className="attachment">미완료</label>*/}
            </form>
            <input type="button" id="sign" value="수정 완료" onClick={onEditClicked}/>
            <Link to={'/members/unregister'}>회원탈퇴</Link>
        </div>
    );
};

export default WonjangEditForm;
