import React, {Component} from 'react';

class PrevButton extends Component {
    render() {
        return (<p className="control">
            <a className="prev" onClick={this.props.onClick}><img alt="이전 이미지" src="/img/btn_left.png"/></a>
        </p>)
    }
};

export default PrevButton;