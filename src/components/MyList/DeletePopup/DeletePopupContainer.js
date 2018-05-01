import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import {isDeletePopup} from "../../../reducers/ui"
import {toggleDeletePopup} from "../../../actions";

class DeletePopupContainer extends Component {
    onDeleteAllClick () {

    }

    render() {
        const {deletePopup, toggleDeletePopup} = this.props
        if (deletePopup) {
            return (
                <DeletePopup
                    toggleDeletePopup={toggleDeletePopup}
                    onDeleteAllClick={this.onDeleteAllClick.bind(this)}
                />
            );
        } else {
            return null
        }
    }
}

DeletePopupContainer.propTypes = {
    deletePopup: PropTypes.bool.isRequired,
    toggleDeletePopup: PropTypes.func.isRequired
};

export default connect(
    state => ({
        deletePopup: isDeletePopup(state.ui)
    }),
    {
        toggleDeletePopup: toggleDeletePopup
    }
)(DeletePopupContainer);
