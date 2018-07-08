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

    componentWillMount() {
        document.getElementsByTagName('body')[0].setAttribute('class', 'sub_search_list');
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

    setStateAsync(newState) {
        return new Promise(resolve => resolve(this.setState({
            ...this.state,
            ...newState
        })))
    }

    async onSave() {
        const {id, kosiwonName} = this.props.match.params
        const {userData} = this.props
        const {question} = this.state

        if (question.length === 0) {
            return alert('문의내용을 입력하지 않았습니다')
        }

        let body = {
            type: 'R',
            status: 'Q',
            kosiwonName,
            kosiwonId: id,
            question
        }

        if (userData && userData._id) {
            body = {
                ...body,
                createdBy: _id,
                updatedBy: _id
            }
        }
        try {
            const questionResult = await fetch('/api/contacts', {
                method: 'POST',
                headers: fetchHeader,
                body: JSON.stringify(body)
            })

            if (questionResult.ok) {
                await this.setStateAsync({showPopup: true})
            }
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
