import React, {Component} from 'react'
import Desc from "./Desc";

class DescContainer extends  Component {
    render () {
        return (
            <Desc {...this.props}/>
        )
    }
}

export default DescContainer