import React, {Component} from 'react'
import ImageView from "./ImageView";

const NextButton = ({onClick}) => {
    return (
        <p className="control">
            <a className="next" onClick={onClick} style={{zIndex: 1}}><img alt="다음 이미지" src="/www/img/btn_right.png"/></a>
        </p>
    )
}

const PrevButton = ({onClick}) => {
    return (
        <p className="control">
            <a className="prev" onClick={onClick} style={{zIndex: 1}}><img alt="이전 이미지" src="/www/img/btn_left.png"/></a>
        </p>
    )
}

class ImageViewContainer extends Component {
    render() {
        const {imageList} = this.props
        const settings = {
            dots: true,
            dotsClass: 'indicator',
            customPaging: i => {
                return (<a style={{cursor:'pointer'}}>{i}번 이미지</a>)
            },
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <PrevButton/>,
            nextArrow: <NextButton/>,
            lazyLoad: false
        };
        if (imageList.length > 0) {
            return (
                <ImageView settings={settings}
                           imageList={imageList}/>
            )
        } else {
            return (
                <div className="image-swipe">
                    <img src="/www/img/thumbnail_none_detail.jpg" height="480px" />
                </div>
            )
        }
    }
}

export default ImageViewContainer