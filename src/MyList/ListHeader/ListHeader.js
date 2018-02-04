import React from 'react';

const ListHeader = () => {
    return (
        <div id="main_search_list" className"ng-scope">
            <div id="list_filter" style="z-index: 0;">
                <ul className"filter">
                    <li ng-show="false" className"ng-hide">
                        <form className"price_set ng-pristine ng-valid" name="price_set">
                            <label>입실료</label>
                            <select name="lowest_price" ng-model="vars.priceMin"
                                    className"ng-pristine ng-untouched ng-valid ng-empty">
                                <option value="? undefined:undefined ?"></option>
                                <option value="0">전체</option>
                                <option value="10">10만원</option>
                                <option value="20">20만원</option>
                                <option value="30">30만원</option>
                                <option value="40">40만원</option>
                                <option value="50">50만원</option>
                                <option value="60">60만원</option>
                                <option value="70">70만원</option>
                                <option value="80">80만원</option>
                                <option value="90">90만원</option>
                                <option value="100">100만원</option>
                            </select>
                            <span>∼</span>
                            <select name="highest_price" ng-model="vars.priceMax"
                                    className"ng-pristine ng-untouched ng-valid ng-empty">
                                <option value="? undefined:undefined ?"></option>
                                <option value="0">전체</option>
                                <option value="10">10만원</option>
                                <option value="20">20만원</option>
                                <option value="30">30만원</option>
                                <option value="40">40만원</option>
                                <option value="50">50만원</option>
                                <option value="60">60만원</option>
                                <option value="70">70만원</option>
                                <option value="80">80만원</option>
                                <option value="90">90만원</option>
                                <option value="100">100만원</option>
                            </select>
                        </form>
                    </li>
                    <li ng-show="false" className"ng-hide">
                        <p className"dt_option"><a href="#">세부옵션</a></p>
                        <form className"dt_option ng-pristine ng-valid" name="dt_option" style="display: none;">
                            <input type="checkbox" name="dt_option" ng-model="vars.isCheckAllA"
                                   ng-checked="vars.isCheckAllA" ng-change="doToggleA()"
                                   className"ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>전체</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.isParking"
                                   ng-checked="vars.isParking"
                                   className"ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>주차 가능</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.isMeal"
                                   ng-checked="vars.isMeal"
                                   className"ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>식사 제공</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.isWoman"
                                   ng-checked="vars.isWoman"
                                   className"ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>여성 전용</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.isSeparate"
                                   ng-checked="vars.isSeparate"
                                   className"ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>남여층 분리</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.isRestRoom"
                                   ng-checked="vars.isRestRoom"
                                   className"ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>개별 화장실</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.isElevator"
                                   ng-checked="vars.isElevator"
                                   className"ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>엘리베이터</label>
                        </form>
                    </li>
                    <li ng-show="false" className"ng-hide">
                        <p className"in_option"><a href="#">내부옵션</a></p>
                        <form className"in_option ng-pristine ng-valid" name="in_option" style="display: none;">
                            <input type="checkbox" name="dt_option" ng-model="vars.isCheckAllB"
                                   ng-checked="vars.isCheckAllB" ng-change="doToggleB()"
                                   className"ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>전체</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.optionDesk"
                                   ng-checked="vars.optionDesk"
                                   className"ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>책상</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.optionBed"
                                   ng-checked="vars.optionBed"
                                   className"ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>침대</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.optionCloset"
                                   ng-checked="vars.optionCloset"
                                   className"ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>옷장</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.optionFan"
                                   ng-checked="vars.optionFan"
                                   className"ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>선풍기</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.optionAircon"
                                   ng-checked="vars.optionAircon"
                                   className"ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>에어컨</label>
                            <br/>
                            <input type="checkbox" name="dt_option"
                                   ng-model="vars.optionRefrigerator"
                                   ng-checked="vars.optionRefrigerator"
                                   className"ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>냉장고</label>
                        </form>
                    </li>
                    <li className"all_delete">
                        <p><a href="#">전체&nbsp;삭제</a></p>
                    </li>
                </ul>
            </div>
            {/* list_filter */}
            <div id="only_list">
                <div className"popup" ng-style="{ 'display' : (vars.isShowPopup ? 'block' : 'none')}"
                     style="display: none;">
                    <p>
                        리스트에 있는 고시원 내역을
                        <br/>
                        모두 삭제하시겠습니까?
                        <a className"delete" style="cursor:pointer;" ng-click="doSelectAllForDelete()">전체 삭제</a>
                        <a className"cancel" style="cursor:pointer;" ng-click="vars.isShowPopup=false">취소</a>
                    </p>
                    <div className"cancel">
                    </div>
                </div>
                <ul className"thumbnail_list">
                    {/*  ngRepeat: data in model.dataList  */}
                    <li ng-repeat="data in model.dataList" className"ng-scope">
                        <a style="cursor:pointer;" ng-click="go('/main/kosiwon-view/'+data.kosiwonId._id)">
                            <div className"thumbnail_img">
                                {/*  <img alt="" src="www/img/thumbnail_img.jpg" //>  */}
                                <img
                                    ng-show="data.kosiwonId.thumbnailUri &amp;&amp; data.kosiwonId.thumbnailUri.length>0"
                                    alt=""
                                    ng-src="/files/kosiwons/57fe101c48b3063022eb5f12/57fe101c48b3063022eb5f12_kosiwon_t_undefined.jpg"
                                    src="/files/kosiwons/57fe101c48b3063022eb5f12/57fe101c48b3063022eb5f12_kosiwon_t_undefined.jpg"/>
                            </div>
                            <div className"thumbnail_info">
                                <p className"ng-binding">그린 고시원 장승배기점</p>
                                <p className"ng-binding">입실료 20∼30만원</p>
                                <p className"info ng-binding">장승배기역 6번출구 바로앞에 위치한 그린 고시원 장승배기점입니다.</p>
                                <ul>
                                    <li ng-className"data.kosiwonId.isParking ? 'on' : ''">주차가능</li>
                                    <li ng-className"data.kosiwonId.isMeal ? 'on' : ''" className"on">식사제공</li>
                                    <li ng-className"data.kosiwonId.isSeparate ? 'on' : ''">남녀층 분리</li>
                                    <li ng-className"data.kosiwonId.isRestRoom ? 'on' : ''">개별 화장실</li>
                                </ul>
                            </div>
                        </a><a className"delete_list" style="cursor:pointer;" ng-click="doDelete(data._id, $index)">
                        <img alt="삭제" src="www/img/exit_gray.png"/>
                    </a>

                    </li>
                    {/*  end ngRepeat: data in model.dataList  */}
                </ul>
                <ul className"list_number">
                    <li><a className"prev" ng-className"vars.pageNo>1 ? 'on' : ''" style="cursor:pointer;"
                           ng-click="goPage(vars.pageNo-1)">이전</a></li>
                    {/*  ngRepeat: pageNo in vars.pageNoList  */}
                    <li ng-repeat="pageNo in vars.pageNoList" ng-className"pageNo===vars.pageNo ? 'on' : ''"
                        className"ng-scope on">
                        <a ng-click="goPage(pageNo)" style="cursor:pointer;" className"ng-binding">1</a>
                    </li>
                    {/*  end ngRepeat: pageNo in vars.pageNoList  */}
                    <li><a className"next" ng-className"vars.pageNo<vars.totalPages ? 'on' : ''" style="cursor:pointer;"
                           ng-click="goPage(vars.pageNo+1)">다음</a></li>
                </ul>
            </div>
            {/* #list */}
        </div>
    );
};

export default ListHeader;
