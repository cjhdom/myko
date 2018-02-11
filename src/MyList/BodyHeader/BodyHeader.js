import React from 'react'

const BodyHeader = () => {
    return (
        <div className="popup" ng-style="{ 'display' : (vars.isShowPopup ? 'block' : 'none')}">
            <p>
                리스트에 있는 고시원 내역을
                <br/>
                모두 삭제하시겠습니까?
                <a className="delete" ng-click="doSelectAllForDelete()">전체 삭제</a>
                <a className="cancel" ng-click="vars.isShowPopup=false">취소</a>
            </p>
            <div className="cancel">
            </div>
        </div>
    )
}

export default BodyHeader