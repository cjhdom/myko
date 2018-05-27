import React from 'react'
import Slider from 'react-slick';
import {Link} from "react-router-dom";

const Master = ({settings, masterList, moveView}) => {
    return (<div className="master">
        <h2>여긴 어때요?<span>마스터</span></h2>
        <Slider {...settings}>
            {masterList.map((masterPage, key) => {
                return (<div className="list_slide" key={key}>
                    <ul className="list_banner">
                        <li className="banner_page">
                            <ul>
                                {masterPage.map((master, i) => {
                                    return (<li key={i}>
                                        <Link to={`/view/${master.id}`} target='_blank'>
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src={master.imgPath}/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>{master.name}</h3>
                                                <p>{master.spanList.map((spans, x) =>
                                                    (<span key={x} className={spans.className}>{spans.desc}</span>)
                                                )}</p>
                                                <p>{master.desc}</p>
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

export default Master