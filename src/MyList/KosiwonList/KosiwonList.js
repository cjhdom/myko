import React from 'react';

const KosiwonList = () => {
    return (
        <li ng-repeat="data in model.dataList" className="ng-scope">
            <a ng-click="go('/main/kosiwon-view/'+data.kosiwonId._id)">
                <div className="thumbnail_img">
                    {/*  <img alt="" src="www/img/thumbnail_img.jpg" //>  */}
                    <img
                        ng-show="data.kosiwonId.thumbnailUri &amp;&amp; data.kosiwonId.thumbnailUri.length>0"
                        alt=""
                        ng-src="/files/kosiwons/57fe101c48b3063022eb5f12/57fe101c48b3063022eb5f12_kosiwon_t_undefined.jpg"
                        src="/files/kosiwons/57fe101c48b3063022eb5f12/57fe101c48b3063022eb5f12_kosiwon_t_undefined.jpg"/>
                </div>
                <div className="thumbnail_info">
                    <p className="ng-binding">그린 고시원 장승배기점</p>
                    <p className="ng-binding">입실료 20∼30만원</p>
                    <p className="info ng-binding">장승배기역 6번출구 바로앞에 위치한 그린 고시원 장승배기점입니다.</p>
                    <ul>
                        <li ng-className="data.kosiwonId.isParking ? 'on' : ''">주차가능</li>
                        <li ng-className="data.kosiwonId.isMeal ? 'on' : ''" className="on">식사제공</li>
                        <li ng-className="data.kosiwonId.isSeparate ? 'on' : ''">남녀층 분리</li>
                        <li ng-className="data.kosiwonId.isRestRoom ? 'on' : ''">개별 화장실</li>
                    </ul>
                </div>
            </a><a className="delete_list" ng-click="doDelete(data._id, $index)">
            <img alt="삭제" src="www/img/exit_gray.png"/>
        </a>

        </li>
    );
};

export default KosiwonList;
