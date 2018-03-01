import React, {Component} from 'react';
import PropTypes from 'prop-types';
import KosiwonUpload from "./KosiwonUpload";

class KosiwonUploadContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    onChanged(e) {
        const {id, value} = e.target
        const newState = {}
        newState[id] = value
        this.setState({
            ...this.state,
            ...newState
        })
    }

    onToggle (e) {
        const {id} = e.target
        const value = !this.state[id]
        let newState = {}
        newState[id] = value
        this.setState({
            ...this.state,
            ...newState
        })
    }

    componentDidMount() {
        if (this.props.match.params.id > -1) {

        }
    }

    render() {
        return (
            <KosiwonUpload onChanged={this.onChanged.bind(this)}
                           onToggle={this.onToggle.bind(this)}
                           {...this.state}/>
        );
    }
}

KosiwonUploadContainer.propTypes = {};

export default KosiwonUploadContainer;
