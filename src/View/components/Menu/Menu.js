import React from 'react'
import {Link} from 'react-router-dom'

const style = {display: 'none'}

const Menu = ({
                  id,
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
                  toggleFavorite,
                  priceMax,
                  priceMin,
                  isWonjang
              }) => {
    return (
        <div className="detail_info">
            <div className="detail_info_top">
                <h2>{kosiwonName}</h2>
                <h3>{`입실료 ${priceMin}∼${priceMax}만원`}</h3>
                <p><a className={isFavorite ? 'on' : ''} onClick={toggleFavorite}>찜하기</a></p>
            </div>
            <ul className="sub_option">
                <li className={isParking ? 'on' : ''}>주차가능</li>
                <li className={isMeal ? 'on' : ''}>식사제공</li>
                <li className={isSeparate ? 'on' : ''}>남녀층 분리</li>
                <li className={isRestRoom ? 'on' : ''}>개별 화장실</li>
            </ul>
            <ul className="detail_info_bottom">
                <li>
                    <a onClick={togglePhonePopup}>문의전화</a>
                    {phonePopup && <div className="popup_call">
                        <ul>
                            <li><h2>문의전화</h2></li>
                            <li><a onClick={togglePhonePopup}>
                                <img alt="exit" src="/img/exit_gray.png"/>
                            </a>
                            </li>
                            <div ng-click="gaCheck(model.kosiwonName)">{kosiwonVirtualNo || kosiwonPhoneNo}</div>
                        </ul>
                        <div className="cancel" onClick={togglePhonePopup}>
                        </div>
                    </div>}
                </li>
                <li>
                    <a target="blank"
                       href={kosiwonUrl}>홈페이지</a>
                </li>
                {!isWonjang && <li>
                    <a ng-click="go('/main/kosiwon-singo/'+model._id+'/'+model.kosiwonName)">신고하기</a>
                </li>}
                {isWonjang && <li>
                    <Link to={`/members/upload/${id}`}>수정하기</Link>
                </li>}
            </ul>
        </div>
    )
}

export default Menu