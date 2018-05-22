import React, {Component} from 'react'
import ImageView from "./ImageView";

const NextButton = ({onClick}) => {
    return (
        <p className="control">
            <a className="next" onClick={onClick} style={{zIndex: 1}}><img alt="다음 이미지" src="/img/btn_right.png"/></a>
        </p>
    )
}

const PrevButton = ({onClick}) => {
    return (
        <p className="control">
            <a className="prev" onClick={onClick} style={{zIndex: 1}}><img alt="이전 이미지" src="/img/btn_left.png"/></a>
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
        return (
            <ImageView settings={settings}
                imageList={imageList}/>
        )
    }
}

export default ImageViewContainer