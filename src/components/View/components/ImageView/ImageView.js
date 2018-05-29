import React, {Component} from 'react';

import Slider from 'react-slick';


const ImageView = ({settings, imageList}) => {
    return (
        <div className="image-swipe">
            <div className="box">
                <Slider {...settings}>
                    {imageList.map((image, i) => {
                        return (
                            <div key={i}>
                                <img src={`http://www.kosirock.co.kr${image.imageUri}`} style={{
                                    height: '480px',
                                    textAlign: 'center',
                                    display: 'block',
                                    marginLeft: 'auto',
                                    marginRight: 'auto'
                                }}/>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default ImageView;