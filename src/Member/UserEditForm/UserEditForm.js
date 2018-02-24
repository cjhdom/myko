import React from 'react';

const UserEditForm = ({onRegisterClicked, onChanged}) => {
    return (
        <div id="normalsign_detail">
            <h1>일반 회원가입</h1>
            <form className="normalsign">
                <input type="email" id="email" placeholder="이메일 (아이디)" onChange={onChanged}/>
                <input type="password" id="password" placeholder="비밀번호" maxLength="15" onChange={onChanged}/>
                <input type="password" id="passwordConfirm" placeholder="비밀번호 확인" onChange={onChanged}/>
                <input type="text" id="name" placeholder="본인 성명을 입력해주세요." maxLength="5" onChange={onChanged}/>
                <input type="text" id="phoneNo" placeholder="휴대전화번호를 입력해주세요. (-없이)"
                       maxLength="11" onChange={onChanged}/>
                <input type="button" id="sign" value="가입하기" onClick={onRegisterClicked}/>
            </form>
        </div>
    );
};

export default UserEditForm;
