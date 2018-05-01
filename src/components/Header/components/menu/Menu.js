import React from 'react';

const Menu = ({onButtonClick}) => {
    return (
        <ul id="gnb">
            <li>
                <a id="recent" onClick={onButtonClick}>최근 본 고시원</a>
            </li>
            <li>
                <a id="favorite" onClick={onButtonClick}>찜한 고시원</a>
            </li>
            <li className="post">
                <a id="upload" onClick={onButtonClick}>고시원 올리기</a>
            </li>
        </ul>
    );
};

export default Menu;
