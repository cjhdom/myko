import React from 'react'

const style = {display: 'none'}

const Menu = () => {
    return (
        <div className="detail_info">
            <div className="detail_info_top">
                <h2 className="ng-binding">내자리 원룸텔</h2>
                <h3 className="ng-binding">입실료 40∼55만원</h3>
                <p><a ng-click="doToggleFavorite()" ng-className="vars.isFavorite ? 'on' : ''"
                      className="on">찜하기</a></p>
                <div className="popup" ng-style="{ 'display' : (vars.isShowPopup ? 'block' : 'none') }"
                     style={style}>
                    <p>
                        회원 전용 기능입니다.
                        <br/>
                        로그인 후 이용이 가능합니다.
                        <a ng-click="go('/members/login')" className="login">로그인 페이지로</a>
                        <a ng-click="vars.isShowPopup=false" className="cancel">취소</a>
                    </p>
                    <div className="cancel"/>
                </div>
            </div>
            <ul className="sub_option">
                <li ng-className="model.isParking ? 'on' : ''" className="on">주차가능</li>
                <li ng-className="model.isMeal ? 'on' : ''" className="on">식사제공</li>
                <li ng-className="model.isSeparate ? 'on' : ''" className="on">남녀층 분리</li>
                <li ng-className="model.isRestRoom ? 'on' : ''" className="on">개별 화장실</li>
            </ul>
            <ul className="detail_info_bottom">
                <li>
                    <a ng-click="vars.isShowQuestionPopup=true">문의전화</a>
                    <div className="popup_call ng-hide" ng-show="vars.isShowQuestionPopup">
                        <ul>
                            <li><h2>문의전화</h2></li>
                            <li><a ng-click="vars.isShowQuestionPopup=false">
                                <img alt="exit" src="/img/exit_gray.png"/>
                            </a>
                            </li>
                            <div ng-if="model.kosiwonVirtualNo" ng-bind="model.kosiwonVirtualNo | tel"
                                 ng-click="gaCheck(model.kosiwonName)" className="ng-binding ng-scope">050-4136-19954
                            </div>
                        </ul>
                        <div className="cancel" ng-click="vars.isShowQuestionPopup=false()">
                        </div>
                    </div>
                </li>
                <li>
                    <a ng-href="http://naejari1roomtel.garamcs.com" target="blank"
                       href="http://naejari1roomtel.garamcs.com">홈페이지</a>
                </li>
                <li ng-show="user.userType!=='W'">
                    <a ng-click="go('/main/kosiwon-singo/'+model._id+'/'+model.kosiwonName)">신고하기</a>
                </li>
                <li ng-show="user.userType==='W'" className="ng-hide">
                    <a ng-click="go('/members/kosiwon-edit/'+model._id)">수정하기</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu