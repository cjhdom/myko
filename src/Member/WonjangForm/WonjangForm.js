import React from 'react';

const WonjangForm = ({
                         onRegisterClicked,
                         onChanged,
                         onFileUploadClicked,
                         email,
                         name,
                         phoneNo,
                         kosiwonName,
                         kosiwonAddress,
                         kosiwonPhoneNo,
                         registrationNo
                     }) => {
    return (
        <div id="suppliersign_detail">
            <h1>고시원 원장 회원가입</h1>
            <form className="normalsign">
                <input type="email" id="email" placeholder="이메일 (아이디)" onChange={onChanged} value={email}/>
                <input type="password" id="password" placeholder="비밀번호" maxLength="15" onChange={onChanged}/>
                <input type="password" id="passwordConfirm" placeholder="비밀번호 확인" maxLength="15" onChange={onChanged}/>
                <input type="text" id="name" placeholder="본인 성명을 입력해주세요." maxLength="5" onChange={onChanged} value={name}/>
                <input type="text" id="phoneNo" placeholder="휴대전화번호를 입력해주세요. (-없이)" maxLength="11"
                       onChange={onChanged} value={phoneNo}/>
            </form>
            <form className="roominfo">
                <label>고시원 정보 입력</label>
                <input type="text" id="kosiwonName" placeholder="고시원 명을 입력해주세요." maxLength="16" onChange={onChanged} value={kosiwonName}/>
                <input type="text" id="kosiwonAddress" placeholder="고시원 주소를 입력해주세요." onChange={onChanged} value={kosiwonAddress}/>
                <input type="text" id="kosiwonPhoneNo" placeholder="고시원 전화번호를 입력해주세요. (-없이)"
                       maxLength="12" onChange={onChanged} value={kosiwonPhoneNo}/>
                <label>사업자 등록번호</label>
                <input type="text" id="registrationNo" placeholder="사업자 등록번호를 입력해주세요. (-없이)"
                       maxLength="10" onChange={onChanged} value={registrationNo}/>
                <input type="button" value="사업자 등록증 첨부" onClick={onFileUploadClicked}/>
                <input type="file" id="registrationUri" style={{display: 'none'}}/>
            </form>
            <input type="button" id="sign" value="가입 신청하기" onClick={onRegisterClicked}/>
        </div>
    );
};

export default WonjangForm;
