import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {fetchHeader} from "../../../data/consts";
import {getIsLoggedIn} from "../../../reducers/user";
import {connect} from "react-redux";
import FindPassword from "./FindPassword";

class FindPasswordContainer extends Component {
    constructor(props) {
        super(props)

        if (this.props.isLoggedIn) {
            this.props.history.push('/')
        }

        this.state = {
            showPopup: false,
            email: ''
        }
        this.requestMail = this.requestMail.bind(this)
        this.closePopup = this.closePopup.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    async requestMail() {
        const {email} = this.state

        if (email.length === 0) {
            return alert('이메일 주소가 유효하지 않습니다.')
        }

        let body = {
            andOption: [
                {key: 'email', value: email}
            ],
            orOption: [],
            sortOption: '-created',
            pageNo: 1,
            pageSize: 10
        }

        try {
            const queryResult = await fetch('http://www.kosirock.co.kr/api/users/listBySearchOption', {
                method: 'POST',
                headers: fetchHeader,
                body: JSON.stringify(body)
            })

            if (queryResult.ok) {
                const data1 = await queryResult.json()
                if (data1.items.length < 1) {
                    return alert('이메일 주소가 유효하지 않습니다.')
                } else {
                    const sendRequest = await fetch('http://www.kosirock.co.kr/api/users/sendEmail', {
                        method: 'POST',
                        headers: fetchHeader,
                        body: JSON.stringify(data1.items[0])
                    })

                    if (sendRequest.ok) {
                        return await this.showPopup({showPopup: true})
                    } else {
                        return alert('이메일 발송중 오류가 발생했습니다. 다시 시도해주세요.')
                    }
                }
            }
        } catch (e) {
            console.log(e)
        }
    }

    showPopup(newState) {
        return new Promise(resolve => {
            return resolve(this.setState({
                ...this.state,
                ...newState
            }))
        })
    }

    closePopup() {
        this.setState({
            ...this.state,
            showPopup: false
        })
    }

    onChange (e) {
        const {id, value} = e.target
        this.setState({
            ...this.state,
            [id]: value
        })
    }

    render() {
        return (
            <FindPassword closePopup={this.closePopup}
                          requestMail={this.requestMail}
                          onChange={this.onChange}
                          {...this.state}/>
        );
    }
}

FindPasswordContainer.propTypes = {};

export default connect(
    state => ({
        isLoggedIn: getIsLoggedIn(state.user)
    })
)(FindPasswordContainer);
