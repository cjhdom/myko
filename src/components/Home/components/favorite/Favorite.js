import React from 'react';
import PropTypes from 'prop-types';

const Favorite = ({
                    id,
                    thumbnailUri,
                    kosiwonName,
                    priceMax,
                    priceMin
                }) => {
    return (
        <li>
            <a>
                <div className="thumbnail_top">
                    <img alt="고시원 사진"
                         src={thumbnailUri}/>
                </div>
                <div className="thumbnail_bottom">
                    <p>{kosiwonName}</p>
                    <p>{priceMin} ~ {priceMax}만원</p>
                </div>
            </a>
        </li>
    );
};

Favorite.propTypes = {
    id: PropTypes.string.isRequired,
    thumbnailUri: PropTypes.string.isRequired,
    kosiwonName: PropTypes.string.isRequired,
    priceMax: PropTypes.number.isRequired,
    priceMin: PropTypes.number.isRequired
};

export default Favorite;
