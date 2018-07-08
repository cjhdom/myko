import React, {Component} from 'react'
import {connect} from 'react-redux'
import MyKosiwonList from "./MyKosiwonList";
import {getUserData} from "../../../reducers/user";
import {fetchHeader} from "../../../data/consts";

class MyKosiwonListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            kosiwonList: []
        }
    }

    setStateAsync(newState) {
        return new Promise(resolve => resolve(this.setState({
            ...this.state,
            ...newState
        })))
    }

    async componentDidMount() {
        const {id} = this.props.userData
        const body = {
            "populateOption": [],
            "projectOption": {
                "kosiwonName": 1,
                "priceMin": 1,
                "priceMax": 1,
                "intro": 1,
                "isParking": 1,
                "isMeal": 1,
                "isSeparate": 1,
                "isRestRoom": 1,
                "imageUri": 1
            },
            "andOption": [{"key": "createdBy", "value": id}],
            "orOption": [],
            "sortOption": "-created",
            "pageNo": 1,
            "pageSize": 100
        }

        try {
            const result = await fetch('/api/kosiwons/listBySearchOption', {
                method: 'POST',
                headers: fetchHeader,
                body: JSON.stringify(body)
            })

            const data = await result.json()

            await this.setStateAsync({
                kosiwonList: data.items
            })
        } catch (e) {
            console.log(`error: ${e}`)
        }
    }

    render() {
        const {kosiwonList} = this.state
        return (
            <div id="myroom_confirm">
                <h1>내가 올린 고시원</h1>
                <ul className="myroom">
                    {kosiwonList.map(kosiwon =>
                        <MyKosiwonList key={kosiwon._id} {...kosiwon} />
                    )}
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        userData: getUserData(state.user)
    })
)(MyKosiwonListContainer)