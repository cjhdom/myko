import React from 'react'
import Slider from 'react-slick';

import {Link} from 'react-router-dom'

const Dia = ({settings, diaList}) => {
    return (<div className="diamond">
        <h2>여기도 있어요!<span>다이아</span></h2>
        <Slider {...settings}>
            {diaList.map((diaPage, key) => {
                return (<div className="list_slide" key={key}>
                    <ul className="list_banner">
                        <li className="banner_page">
                            <ul>
                                {diaPage.map((dia, i) => {
                                    return (<li key={i}>
                                        <Link to={`/View/${dia.id}`} target='_blank'>
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src={dia.imgPath}/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>{dia.name}</h3>
                                                <p>{dia.spanList.map((spans, y) =>
                                                    (<span key={y} className={spans.className}>{spans.desc}</span>)
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