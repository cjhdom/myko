import React from 'react'

const Desc = ({desc}) => {
    return (
        <div className="detail_info_roominfo">
            <p>고시원 상세설명</p>
            <pre className="ng-binding" dangerouslySetInnerHTML={{__html: desc}}/>
        </div>
    )
}

export default Desc