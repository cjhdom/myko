import React, {Component} from 'react';
import NormalRegistration from "./NormalRegistration";

class NormalRegistrationContainer extends Component {
    constructor() {
        super()
        this.state = {
            all: false,
            agree1: false,
            agree2: false,
            agree3: false
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
            let newState = {}
            newState[id] = !this.state[id]
            this.setState({
                ...this.state,
                ...newState
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

    render() {
        return (
            <NormalRegistration
                toggleAgree={this.toggleAgree.bind(this)}
                {...this.state}
            />
        );
    }
}

export default NormalRegistrationContainer;
