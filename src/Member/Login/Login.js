import React from 'react';
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div id="login">
            <h1>로그인</h1>
            <form className="login">
                <input type="email" id="email" placeholder="이메일 (아이디)" ng-model="model.username"
                       ng-keydown="doEmailKeyDown($event)"/>
                <br/>
                <input type="password" id="password" placeholder="비밀번호" ng-model="model.password"
                       ng-keydown="doPasswordKeyDown($event)" maxLength="15"/>
                <br/>
                <input type="submit" name="login" value="로그인" ng-click="doLogin()" maxLength="15"/>
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
                <a className="supplier_sign" ng-click="go('/members/join-wonjang')">고시원 원장 회원가입</a>
            </p>
        </div>
    );
};

export default Login;
