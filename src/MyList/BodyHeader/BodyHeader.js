import React from 'react'

const BodyHeader = ({showPopup, toggleDeletePopup, removeRecentList}) => {
    return (
        <div className="popup" style={{display: showPopup ? 'block' : 'none'}}>
            <p>
                리스트에 있는 고시원 내역을
                <br/>
                모두 삭제하시겠습니까?
                <a className="delete" onClick={removeRecentList}>전체 삭제</a>
                <a className="cancel" onClick={toggleDeletePopup}>취소</a>
            </p>
            <div className="cancel">
            </div>
        </div>
    )
}

export default BodyHeader