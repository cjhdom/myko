import React, {Component} from 'react';

import Slider from 'react-slick';


const ImageView = ({settings, imageList}) => {
    return (
        <div className="image-swipe">
            <div className="box">

                {/*<ul className="image">*/}
                    <Slider {...settings}>
                        {imageList.map((image, i) => {
                            return (
                                <div key={i}>
                                    <img src={`http://www.kosirock.co.kr/${image.imageUri}`} style={{
                                        width: '720px',
                                        height: '480px'
                                    }}/>
                                </div>
                            )
                        })}
                    </Slider>
                {/*</ul>*/}
                {/*<ul className="indicator">
                    <li className=""/>
                </ul>*/}
            </div>
        </div>
    )
}

export default ImageView;