import React from 'react';
import {Link} from 'react-router-dom'

const Login = ({handleChange, onLoginClicked, handleKeyPress}) => {
    return (
        <div id="login">
            <h1>로그인</h1>
            <form className="login">
                <input type="email" id="email" placeholder="이메일 (아이디)" onChange={handleChange} />
                <br/>
                <input type="password" id="password" placeholder="비밀번호" maxLength="15" onChange={handleChange} onKeyDown={handleKeyPress}/>
                <br/>
                <input type="button" name="login" value="로그인" onClick={onLoginClicked} maxLength="15" />
                <br/>
                <input type="checkbox" name="로그인 정보 저장" value="로그인 정보 저장"
                       ng-model="vars.isChecked"/>
                <label ng-click="vars.isChecked = !vars.isChecked">로그인 정보 저장</label>
            </form>
            <a ng-click="go('/members/find-password')">비밀번호 찾기</a>
            <p className="messenger">
                <a className="facebook" ng-click="doFacebookLogin()">페이스북으로 로그인</a>
                <br/>
                <a className="kakaotalk" ng-click="doKakaoLogin()">카카오톡으로 로그인</a>
            </p>
            <p className="signup">
                <Link className="normal_sign" to="/members/join-user">일반 회원가입</Link>
                <Link className="supplier_sign" to="/members/join-wonjang">고시원 원장 회원가입</Link>
            </p>
        </div>
    );
};

export default Login;
