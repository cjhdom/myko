import React, {Component} from 'react'

class View extends Component {
    render() {
        const {match} = this.props
        const id = match.params.id
        return <div>{`${id}`}</div>
    }
}

export default View