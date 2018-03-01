import React from 'react';

const KosiwonUpload = ({
                           onChanged,
                           onToggle,
                           isParking,
                           isMeal,
                           isWoman,
                           isSeparate,
                           isRestRoom,
                           isElevator,
                           optionDesk,
                           optionBed,
                           optionCloset,
                           optionFan,
                           optionAircon,
                           optionRefrigerator,
                           kosiwonName,
                           kosiwonPhoneNo,
                           kosiwonZipcode,
                           majorAddress,
                           minorAddress,
                           floor,
                           priceMin,
                           priceMax,
                           intro,
                           description
                       }) => {
    return (
        <div id="listup">
            <form>
                <label>고시원명</label>
                <input type="text" id="kosiwonName" placeholder="고시원명을 입력해주세요."
                       maxLength="16" onChange={onChanged} value={kosiwonName}/>
                <label>고시원 전화번호</label>
                <input type="text" id="kosiwonPhoneNo" placeholder="고시원 전화번호를 입력해주세요. (-없이)"
                       maxLength="12" onChange={onChanged} value={kosiwonPhoneNo}/>
                <label>주소</label>
                <input type="text" id="kosiwonZipcode" readOnly placeholder="우편번호" value={kosiwonZipcode}/>
                <a ng-click="doShowJusoPopup()" className="address_find">우편번호 찾기</a>
                <input type="text" id="majorAddress" readOnly placeholder="고시원 주소" value={majorAddress}/>
                <input type="text" id="minorAddress" placeholder="상세 주소를 입력해주세요." onChange={minorAddress}
                       value={minorAddress}/>
                <label>건물층 선택</label>
                <input type="text" id="floor" placeholder="건물 층을 입력해주세요. 예). 1, 2, 3" onChange={onChanged}
                       value={floor}/>

                <label>방 가격</label>
                <div className="price">
                    <input type="text" id="priceMin" placeholder="0" maxLength="3" onChange={onChanged}
                           value={priceMin}/>
                    <p className="minwon">만원</p>
                    <p className="wave">~</p>
                    <input type="text" id="priceMax" placeholder="0" maxLength="3" onChange={onChanged}
                           value={priceMax}/>
                    <p className="maxwon">만원</p>
                </div>

                <label>세부 옵션</label>
                <ul className="dt_info">
                    <li>
                        <input type="checkbox" id="isParking" onClick={onToggle} checked={isParking}/>
                        <label>주차 가능</label>
                    </li>
                    <li>
                        <input type="checkbox" id="isMeal" onClick={onToggle} checked={isMeal}/>
                        <label>식사 제공</label>
                    </li>
                    <li>
                        <input type="checkbox" id="isWoman" onClick={onToggle} checked={isWoman}/>
                        <label>여성 전용</label>
                    </li>
                    <li>
                        <input type="checkbox" id="isSeparate" onClick={onToggle} checked={isSeparate}/>
                        <label>남여층 분리</label>
                    </li>
                    <li>
                        <input type="checkbox" id="isRestRoom" onClick={onToggle} checked={isRestRoom}/>
                        <label>개별 화장실</label>
                    </li>
                    <li>
                        <input type="checkbox" id="isElevator" onClick={onToggle} checked={isElevator}/>
                        <label>엘리베이터</label>
                    </li>
                </ul>
                <label>내부 옵션</label>
                <ul className="in_info">
                    <li>
                        <input type="checkbox" id="optionDesk" onClick={onToggle} checked={optionDesk}/>
                        <label>책상</label>
                    </li>
                    <li>
                        <input type="checkbox" id="optionBed" onClick={onToggle} checked={optionBed}/>
                        <label>침대</label>
                    </li>
                    <li>
                        <input type="checkbox" id="optionCloset" onClick={onToggle} checked={optionCloset}/>
                        <label>옷장</label>
                    </li>
                    <li>
                        <input type="checkbox" id="optionFan" onClick={onToggle} checked={optionFan}/>
                        <label>선풍기</label>
                    </li>
                    <li>
                        <input type="checkbox" id="optionAircon" onClick={onToggle} checked={optionAircon}/>
                        <label>에어컨</label>
                    </li>
                    <li>
                        <input type="checkbox" id="optionRefrigerator" onClick={onToggle} checked={optionRefrigerator}/>
                        <label>냉장고</label>
                    </li>
                </ul>
                <label>한줄 소개</label>
                <input type="text" id="intro" placeholder="고시원 소개를 25자 내외로 입력해주세요" maxLength="25" onChange={onChanged}
                       value={intro}/>
                <label>상세 설명</label>
                <textarea id="description" placeholder="고시원 상세 설명" onChange={onChanged} value={description}/>
                <label>고시원 사진</label>
                {/*<!-- <input type="file" value="" id="upload[]" multiple /></li> -->*/}
                <input ng-click="doAddKosiwonImage()"/>
                <ul>
                    <li ng-repeat="image in imageList"
                        ngf-select="doUploadKosiwonImage($file, $index)">
                        <img src="" style={{width: "100px", height: "100px"}}/>
                        <a>삭제</a>
                    </li>
                </ul>
            </form>
            <input type="button" value="올리기 신청" ng-click="doSave()"/>
        </div>
    );
};

export default KosiwonUpload;
