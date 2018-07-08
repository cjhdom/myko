import React, {Component} from 'react';
import Question from './Question'
import {fetchHeader} from "../../data/consts";

class QuestionContainer extends Component {
    constructor(props) {
        super(props);
        const {type} = this.props.match.params || 'E'
        this.state = {
            showPopup: false,
            question: '',
            type
        }
    }

    componentWillMount() {
        document.getElementsByTagName('body')[0].setAttribute('class', 'sub_search_list');
    }

    onGoBackClicked() {
        this.props.history.push('/contact')
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
        const {question, type} = this.state

        if (question.length === 0) {
            return alert('문의내용을 입력하지 않았습니다')
        }

        let body = {
            type,
            status: 'Q',
            question
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
        }
    }

    render() {
        return (
            <Question onGoBackClicked={this.onGoBackClicked.bind(this)}
                    onChange={this.onChange.bind(this)}
                    onSave={this.onSave.bind(this)}
                    {...this.state}
            />
        );
    }
}

export default QuestionContainer;
