import React, {Component} from 'react';
import {connect} from 'react-redux'
import Report from './Report'
import {fetchHeader} from "../../data/consts";
import {getUserData} from "../../reducers/user";

class ReportContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            question: ''
        }
    }

    onGoBackClicked() {
        this.props.history.goBack()
    }

    onChange(e) {
        const {id, value} = e.target
        this.setState({
            ...this.state,
            [id]: value
        })
    }

    togglePopup () {
        this.setState({
            ...this.state,
            showPopup: !this.state.showPopup
        })
    }

    setStateAsync(newState) {
        return new Promise(resolve => resolve(this.setState({
            ...this.state,
            ...newState
        })))
    }

    async onSave() {
        const {id, kosiwonName} = this.props.match.params
        const {_id} = this.props.userData
        const {question} = this.state
        try {
            await this.setStateAsync({showPopup: true})
            /*const questionResult = await fetch('http://www.kosirock.com/api/contacts', {
                method: 'POST',
                header: fetchHeader,
                body: JSON.stringify({
                    type: 'R',
                    status: 'Q',
                    kosiwonName,
                    kosiwonId: id,
                    createdBy: _id,
                    updatedBy: _id
                })
            })

            if (questionResult.ok) {
                this.togglePopup()
            }*/
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        const {id, kosiwonName} = this.props.match.params
        return (
            <Report id={id}
                    kosiwonName={decodeURI(kosiwonName)}
                    onGoBackClicked={this.onGoBackClicked.bind(this)}
                    onChange={this.onChange.bind(this)}
                    onSave={this.onSave.bind(this)}
                    {...this.state}
            />
        );
    }
}

export default connect(
    state => ({
        userData: getUserData(state.user)
    })
)(ReportContainer);
