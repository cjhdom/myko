import React, {Component} from 'react';
import {connect} from 'react-redux'
import {routeTo} from '../../actions'
import {getIsWonjang} from "../../reducers/user";
import KosiwonUploadComplete from "./KosiwonUploadComplete";

class KosiwonUploadCompleteContainer extends Component {

    constructor (props) {
        super(props)
        const {isWonjang} = this.props
        if (!isWonjang) {
            routeTo('/')
        }
        // this.props.match.params.id
    }

    render() {
        const {routeTo} = this.props
        const id = this.props.match.params.id
        return (
            <KosiwonUploadComplete routeTo={routeTo} id={id}/>
        );
    }
}

KosiwonUploadCompleteContainer.propTypes = {};

export default connect(
    state => ({
        isWonjang: getIsWonjang(state.user)
    }),
    {
        routeTo
    }
)(KosiwonUploadCompleteContainer);
