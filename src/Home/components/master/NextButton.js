import React, {Component} from 'react';

class NextButton extends Component {
    render() {
        return (<p className="control">
            <a className="next" onClick={this.props.onClick}><img alt="다음 이미지" src="/img/btn_right.png"/></a>
        </p>)
    }
};

export default NextButton;