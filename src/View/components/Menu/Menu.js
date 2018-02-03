import React from 'react'

const style = {display: 'none'}

const Menu = ({
                  phonePopup,
                  togglePhonePopup,
                  kosiwonName,
                  kosiwonPhoneNo,
                  kosiwonUrl,
                  kosiwonVirtualNo,
                  kosiwonZipcode,
                  isMeal,
                  isParking,
                  isRestRoom,
                  isSeparate,
                  isFavorite,
                  priceMax,
                  priceMin
              }) => {
    return (
        <div className="detail_info">
            <div className="detail_info_top">
                <h2>{kosiwonName}</h2>
                <h3>{`입실료 ${priceMin}∼${priceMax}만원`}</h3>
                <p><a ng-click="doToggleFavorite()" className={isFavorite ? 'on' : ''}>찜하기</a></p>
            </div>
            <ul className="sub_option">
                <li className={isParking ? 'on' : ''}>주차가능</li>
                <li className={isMeal ? 'on' : ''}>식사제공</li>
                <li className={isSeparate ? 'on' : ''}>남녀층 분리</li>
                <li className={isRestRoom ? 'on' : ''}>개별 화장실</li>
            </ul>
            <ul className="detail_info_bottom">
                <li>
                    <a ng-click="vars.isShowQuestionPopup=true">문의전화</a>
                    {phonePopup && <div className="popup_call">
                        <ul>
                            <li><h2>문의전화</h2></li>
                            <li><a ng-click="vars.isShowQuestionPopup=false">
                                <img alt="exit" src="/img/exit_gray.png"/>
                            </a>
                            </li>
                            <div ng-if="model.kosiwonVirtualNo"
                                 ng-click="gaCheck(model.kosiwonName)">{kosiwonVirtualNo || kosiwonPhoneNo}
                            </div>
                        </ul>
                        <div className="cancel" ng-click="vars.isShowQuestionPopup=false()">
                        </div>
                    </div>}
                </li>
                <li>
                    <a target="blank"
                       href={kosiwonUrl}>홈페이지</a>
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