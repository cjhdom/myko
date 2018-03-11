import React from 'react'
import {Link} from 'react-router-dom'

const MyKosiwonList = ({
                           id,
                           thumbnailUri,
                           kosiwonName,
                           priceMax,
                           priceMin
                       }) => {
    return (
        <li>
            <Link to={`/view/${id}`}>
                <div className="thumbnail_top">
                    <img alt="고시원 사진" src={thumbnailUri}/>
                </div>
                <div className="thumbnail_bottom">
                    <p className="ng-binding">{kosiwonName}</p>
                    <p className="ng-binding">{priceMin} ∼ {priceMax}만원</p>
                </div>
            </Link>
        </li>
    )
}

export default MyKosiwonList