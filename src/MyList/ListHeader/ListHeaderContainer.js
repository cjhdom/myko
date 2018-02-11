import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListHeader from "./ListHeader";

class ListHeaderContainer extends Component {
    render() {
        return (
            <ListHeader toggleDeletePopup={this.props.toggleDeletePopup}/>
        );
    }
}

ListHeaderContainer.propTypes = {};

export default ListHeaderContainer;
