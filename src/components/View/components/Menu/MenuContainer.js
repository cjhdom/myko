import React, {Component} from 'react'
import Menu from './Menu'

class MenuContainer extends Component {
    render () {
        return <Menu {...this.props}/>
    }
}

export default MenuContainer