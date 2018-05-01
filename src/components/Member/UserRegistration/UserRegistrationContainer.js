import React, {Component} from 'react';
import UserRegistration from "./UserRegistration";
import {withRouter} from 'react-router-dom'

class UserRegistrationContainer extends Component {
    constructor() {
        super()
        this.state = {
            all: false,
            agree1: false,
            agree2: false,
            agree3: false,
            isPopupShow: false
        }
    }

    toggleAgree(e) {
        const id = e.target.id
        if (id === 'all') {
            const {all} = this.state
            this.setState({
                ...this.state,
                all: !all,
                agree1: !all,
                agree2: !all,
                agree3: !all
            })
        } else {
            this.setState({
                ...this.state,
                [id]: !this.state[id]
            }, () => {
                const {agree1, agree2, agree3} = this.state
                if (agree1 && agree2 && agree3) {
                    this.setState({
                        ...this.state,
                        all: true
                    })
                } else {
                    this.setState({
                        ...this.state,
                        all: false
                    })
                }
            })
        }
    }

    onNextClicked() {
        const {all} = this.state
        if (all) {
            this.props.history.push('/members/register-user')
        } else {
            this.togglePopup()
        }
    }

    togglePopup() {
        const {isPopupShow} = this.state
        this.setState({
            ...this.state,
            isPopupShow: !isPopupShow
        })
    }

    render() {
        const {isPopupShow} = this.state
        return (
            <UserRegistration
                toggleAgree={this.toggleAgree.bind(this)}
                togglePopup={this.togglePopup.bind(this)}
                onNextClicked={this.onNextClicked.bind(this)}
                isPopupShow={isPopupShow}
                {...this.state}
            />
        );
    }
}

export default withRouter(UserRegistrationContainer);
