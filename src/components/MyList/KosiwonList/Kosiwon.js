import React from 'react';
import {Link} from 'react-router-dom'

const Kosiwon = ({
                     id,
                     index,
                     kosiwon,
                     routeTo,
                     removeRecent
                 }) => {
    const {
        kosiwonName,
        priceMax,
        priceMin,
        thumbnailUri,
        description,
        isMeal,
        isParking,
        isRestRoom,
        isSeparate
    } = kosiwon
    return (
        <li>
            <Link to={`/view/${kosiwon.id}`}>
                <div className="thumbnail_img">
                    {thumbnailUri && <img alt="" src={thumbnailUri}/>}
                </div>
                <div className="thumbnail_info">
                    <p>{kosiwonName}</p>
                    <p>입실료 {priceMin}∼{priceMax}만원</p>
                    <p className="info">{description}</p>
                    <ul>
                        <li className={isParking ? 'on' : ''}>주차가능</li>
                        <li className={isMeal ? 'on' : ''}>식사제공</li>
                        <li className={isSeparate ? 'on' : ''}>남녀층 분리</li>
                        <li className={isRestRoom ? 'on' : ''}>개별 화장실</li>
                    </ul>
                </div>
            </Link>
            <a className="delete_list" onClick={() => removeRecent(id, index)}>
                <img alt="삭제" src="/www/img/exit_gray.png"/>
            </a>
        </li>
    );
};

export default Kosiwon;
