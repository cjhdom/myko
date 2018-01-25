import React from 'react'

const Option = () => {
    return (
        <div className="detail_info_in_option">
            <p>내부 옵션</p>
            <ul>
                <li ng-show="model.optionDesk" className="desk">책상</li>
                <li ng-show="model.optionBed" className="bedroom">침대</li>
                <li ng-show="model.optionCloset" className="closet">옷장</li>
                <li ng-show="model.optionRefrigerator" className="refrigerator">냉장고</li>
                <li ng-show="model.optionAircon" className="airconditioner">에어컨</li>
                <li ng-show="model.optionFan" className="fan ng-hide">선풍기</li>
            </ul>
        </div>
    )
}

export default Option
