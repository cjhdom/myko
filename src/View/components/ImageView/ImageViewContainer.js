import React, {Component} from 'react'

class ImageViewContainer extends Component {
    render() {
        return (
            <div className="image-swipe">
                <div className="box">
                    <ul className="image">
                        <li>
                            <img alt=""
                                 src="/files/kosiwons/5a3a639ecd93abf249ad6cfc/5a3a639ecd93abf249ad6cfc_kosiwon_0.jpg"/>
                        </li>
                    </ul>
                    <ul className="indicator">
                        <li className=""/>
                    </ul>
                </div>
                <p className="control">
                    <a className="prev"><img alt="이전 이미지" src="/img/btn_left.png"/></a>
                    <a className="next"><img alt="다음 이미지" src="/img/btn_right.png"/></a>
                </p>
            </div>
        )
    }
}

export default ImageViewContainer