import React, {Component} from 'react'
import Option from './Option'

class OptionContainer extends Component {
    render () {
        return <Option {...this.props}/>
    }
}

export default OptionContainer