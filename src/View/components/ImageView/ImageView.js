import React, {Component} from 'react';

import Slider from 'react-slick';


const ImageView = ({settings, imageList}) => {
    return (
        <div className="image-swipe">
            <div className="box">
                <ul className="image">
                    <Slider {...settings}>
                        {imageList.map((image, i) => {
                            return (
                                <li key={i}>
                                    <img src={image.imageUri}/>
                                </li>
                            )
                        })}
                    </Slider>
                </ul>
                {/*<ul className="indicator">
                    <li className=""/>
                </ul>*/}
            </div>
        </div>
    )
}

export default ImageView;