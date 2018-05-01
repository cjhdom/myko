import React from 'react';
import PropTypes from 'prop-types';
import {every} from 'lodash'

const onChange = (original, handler) => e => handler(e, original)
const isAllSelected = original => every(original)

const SearchMenu = ({
                        priceRange,
                        detailOptions,
                        roomOptions,
                        handleOnChange,
                        handleOnChangeAll,
                        handleSelect
                    }) => {
    return (
        <div id="list_filter">
            <ul className="filter">
                <li>
                    <form className="price_set" name="price_set">
                        <label>입실료</label>
                        <select name="lowest_price" id="priceMin" onChange={handleSelect}>
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
                        <span>&#8764;</span>
                        <select name="highest_price" id="priceMax" onChange={handleSelect}>
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
                <li>
                    <p className="dt_option"><a href="#">세부옵션</a></p>
                    <form className="dt_option" name="dt_option">
                        <input type="checkbox" name="dt_option" checked={detailOptions.isAllSelected}
                               onChange={onChange('detailOptions', handleOnChangeAll)} />
                        <label>전체</label>
                        <br/>
                        <input type="checkbox" name="dt_option" id="isParking" checked={detailOptions.isParking}
                               onChange={onChange('detailOptions', handleOnChange)} />
                        <label>주차 가능</label>
                        <br/>
                        <input type="checkbox" name="dt_option" id="isMeal" checked={detailOptions.isMeal}
                               onChange={onChange('detailOptions', handleOnChange)} />
                        <label>식사 제공</label>
                        <br/>
                        <input type="checkbox" name="dt_option" id="isWoman" checked={detailOptions.isWoman}
                               onChange={onChange('detailOptions', handleOnChange)} />
                        <label>여성 전용</label>
                        <br/>
                        <input type="checkbox" name="dt_option" id="isSeparate" checked={detailOptions.isSeparate}
                               onChange={onChange('detailOptions', handleOnChange)} />
                        <label>남여층 분리</label>
                        <br/>
                        <input type="checkbox" name="dt_option" id="isRestRoom" checked={detailOptions.isRestRoom}
                               onChange={onChange('detailOptions', handleOnChange)} />
                        <label>개별 화장실</label>
                        <br/>
                        <input type="checkbox" name="dt_option" id="isElevator" checked={detailOptions.isElevator}
                               onChange={onChange('detailOptions', handleOnChange)} />
                        <label>엘리베이터</label>
                    </form>
                </li>
                <li>
                    <p className="in_option"><a href="#">내부옵션</a></p>
                    <form className="in_option" name="in_option">
                        <input type="checkbox" name="dt_option" id="isCheckAllB" checked={roomOptions.isAllSelected}
                               onChange={onChange('roomOptions', handleOnChangeAll)} />
                        <label>전체</label>
                        <br/>
                        <input type="checkbox" name="dt_option" id="optionDesk" checked={roomOptions.optionDesk}
                               onChange={onChange('roomOptions', handleOnChange)} />
                        <label>책상</label>
                        <br/>
                        <input type="checkbox" name="dt_option" id="optionBed" checked={roomOptions.optionBed}
                               onChange={onChange('roomOptions', handleOnChange)}/>
                        <label>침대</label>
                        <br/>
                        <input type="checkbox" name="dt_option" id="optionCloset" checked={roomOptions.optionCloset}
                               onChange={onChange('roomOptions', handleOnChange)}/>
                        <label>옷장</label>
                        <br/>
                        <input type="checkbox" name="dt_option" id="optionFan" checked={roomOptions.optionFan}
                               onChange={onChange('roomOptions', handleOnChange)}/>
                        <label>선풍기</label>
                        <br/>
                        <input type="checkbox" name="dt_option" id="optionAircon" checked={roomOptions.optionAircon}
                               onChange={onChange('roomOptions', handleOnChange)}/>
                        <label>에어컨</label>
                        <br/>
                        <input type="checkbox" name="dt_option" id="optionRefrigerator" checked={roomOptions.optionRefrigerator}
                               onChange={onChange('roomOptions', handleOnChange)}/>
                        <label>냉장고</label>
                    </form>
                </li>
                <li className="open_list">
                    <p><a style={{cursor: 'pointer'}} ng-click="static.isShowMap=true">지도로 보기</a></p>
                </li>
            </ul>
        </div>
    );
};

SearchMenu.propTypes = {
    priceRange: PropTypes.object.isRequired,
    detailOptions: PropTypes.object.isRequired,
    roomOptions: PropTypes.object.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    handleOnChangeAll: PropTypes.func.isRequired,
    handleSelect: PropTypes.func.isRequired
};

export default SearchMenu;
