import React from 'react';

const ListHeader = () => {
    return (
        <div id="list_filter" style={{zIndex: "0"}}>
            <ul className="filter">
                {/*<li ng-show="false">
                        <form className="price_set ng-pristine ng-valid" name="price_set">
                            <label>입실료</label>
                            <select name="lowest_price" ng-model="vars.priceMin"
                                    className="ng-pristine ng-untouched ng-valid ng-empty">
                                <option value=""></option>
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
                                    className="ng-pristine ng-untouched ng-valid ng-empty">
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
                    <li ng-show="false" className="ng-hide">
                        <p className="dt_option"><a href="#">세부옵션</a></p>
                        <form className="dt_option ng-pristine ng-valid" name="dt_option" style="display: none;">
                            <input type="checkbox" name="dt_option" ng-model="vars.isCheckAllA"
                                   ng-checked="vars.isCheckAllA" ng-change="doToggleA()"
                                   className="ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>전체</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.isParking"
                                   ng-checked="vars.isParking"
                                   className="ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>주차 가능</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.isMeal"
                                   ng-checked="vars.isMeal"
                                   className="ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>식사 제공</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.isWoman"
                                   ng-checked="vars.isWoman"
                                   className="ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>여성 전용</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.isSeparate"
                                   ng-checked="vars.isSeparate"
                                   className="ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>남여층 분리</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.isRestRoom"
                                   ng-checked="vars.isRestRoom"
                                   className="ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>개별 화장실</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.isElevator"
                                   ng-checked="vars.isElevator"
                                   className="ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>엘리베이터</label>
                        </form>
                    </li>
                    <li ng-show="false" className="ng-hide">
                        <p className="in_option"><a href="#">내부옵션</a></p>
                        <form className="in_option ng-pristine ng-valid" name="in_option" style="display: none;">
                            <input type="checkbox" name="dt_option" ng-model="vars.isCheckAllB"
                                   ng-checked="vars.isCheckAllB" ng-change="doToggleB()"
                                   className="ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>전체</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.optionDesk"
                                   ng-checked="vars.optionDesk"
                                   className="ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>책상</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.optionBed"
                                   ng-checked="vars.optionBed"
                                   className="ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>침대</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.optionCloset"
                                   ng-checked="vars.optionCloset"
                                   className="ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>옷장</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.optionFan"
                                   ng-checked="vars.optionFan"
                                   className="ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>선풍기</label>
                            <br/>
                            <input type="checkbox" name="dt_option" ng-model="vars.optionAircon"
                                   ng-checked="vars.optionAircon"
                                   className="ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>에어컨</label>
                            <br/>
                            <input type="checkbox" name="dt_option"
                                   ng-model="vars.optionRefrigerator"
                                   ng-checked="vars.optionRefrigerator"
                                   className="ng-pristine ng-untouched ng-valid ng-empty"/>
                            <label>냉장고</label>
                        </form>
                    </li>*/}
                <li className="all_delete">
                    <p><a href="#">전체&nbsp;삭제</a></p>
                </li>
            </ul>
        </div>
    );
};

export default ListHeader;
