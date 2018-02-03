import React from 'react'
import Slider from 'react-slick';

import Link from 'react-router-redux-dom-link'

const Dia = ({settings, diaList}) => {
    return (<div className="diamond">
        <h2>여긴 어때요?<span>마스터</span></h2>
        <Slider {...settings}>
            {diaList.map((diaPage, key) => {
                return (<div className="list_slide" key={key}>
                    <ul className="list_banner">
                        <li className="banner_page">
                            <ul>
                                {diaPage.map(dia => {
                                    return (<li key={dia.id}>
                                        <Link to={`/View/${dia.id}`}>
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src={dia.imgPath}/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>{dia.name}</h3>
                                                <p>{dia.spanList.map(spans =>
                                                    (<span className={spans.className}>{spans.desc}</span>)
                                                )}</p>
                                                <p>{dia.desc}</p>
                                            </div>
                                        </Link>
                                    </li>)
                                })}
                            </ul>
                        </li>
                    </ul>
                </div>)
            })}
        </Slider>
    </div>)
}

export default Dia