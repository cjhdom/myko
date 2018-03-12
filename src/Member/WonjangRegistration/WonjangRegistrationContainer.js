import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WonjangRegistration from "./WonjangRegistration";

class WonjangRegistrationContainer extends Component {
    constructor() {
        super()
        this.state = {
            all: false,
            agree1: false,
            agree2: false,
            agree3: false,
            agree4: false,
            agree5: false,
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
                agree3: !all,
                agree4: !all,
                agree5: !all
            })
        } else {
            this.setState({
                ...this.state,
                [id]: !this.state[id]
            }, () => {
                const {agree1, agree2, agree3, agree4, agree5} = this.state
                if (agree1 && agree2 && agree3 && agree4 && agree5) {
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
            this.props.history.push('/members/register-wonjang')
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
            <WonjangRegistration
                toggleAgree={this.toggleAgree.bind(this)}
                togglePopup={this.togglePopup.bind(this)}
                onNextClicked={this.onNextClicked.bind(this)}
                isPopupShow={isPopupShow}
                {...this.state}/>
        );
    }
}

WonjangRegistrationContainer.propTypes = {};

export default WonjangRegistrationContainer;
