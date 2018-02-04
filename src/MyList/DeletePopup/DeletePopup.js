import React from 'react';
import PropTypes from 'prop-types';

const DeletePopup = ({toggleDeletePopup}) => {
    return (
        <div className="popup" ng-style="{ 'display' : (vars.isShowPopup ? 'block' : 'none')}" style="display: none;">
            <p>
                리스트에 있는 고시원 내역을
                <br/>
                모두 삭제하시겠습니까?
                <a className="delete" style="cursor:pointer;" ng-click="doSelectAllForDelete()">전체 삭제</a>
                <a className="cancel" style="cursor:pointer;" onClick={toggleDeletePopup}>취소</a>
            </p>
            <div className="cancel" onClick={toggleDeletePopup}>
            </div>
        </div>
    );
};

DeletePopup.PropTypes = {
    toggleDeletePopup: PropTypes.func.isRequired
}

export default DeletePopup;
