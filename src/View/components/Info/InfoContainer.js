import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Info from "./Info";

class InfoContainer extends Component {
    render() {
        return (
            <Info {...this.props}/>
        );
    }
}

InfoContainer.propTypes = {};

export default InfoContainer;
