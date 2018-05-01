import React from 'react'

const Option = ({
                    optionAircon,
                    optionBed,
                    optionCloset,
                    optionDesk,
                    optionFan,
                    optionRefrigerator
                }) => {
    return (
        <div className="detail_info_in_option">
            <p>내부 옵션</p>
            <ul>
                {optionDesk && <li className="desk">책상</li>}
                {optionBed && <li className="bedroom">침대</li>}
                {optionCloset && <li className="closet">옷장</li>}
                {optionRefrigerator && <li className="refrigerator">냉장고</li>}
                {optionAircon && <li className="airconditioner">에어컨</li>}
                {optionFan && <li className="fan ng-hide">선풍기</li>}
            </ul>
        </div>
    )
}

export default Option
