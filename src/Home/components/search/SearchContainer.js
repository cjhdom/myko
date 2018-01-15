import React, {Component} from 'react';
import Search from './Search';
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete'

class SearchContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { address: '' }
        this.onChange = (address) => this.setState({ address })
    }

    handleFormSubmit (event) {
        event.preventDefault()

        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error))
    }

    handleSelect (address, placeId) {
        this.setState({
            address
        })
    }

    render () {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange.bind(this),
            onBlur: () => false,
            type: 'search',
            name: 'search_bar',
            placeholder: '지역명, 지하철역명, 대학교명을 입력하세요.'
        }
        const cssClasses = {
            input: ''
        }
        return <Search inputProps={inputProps}
                       handleFormSubmit={this.handleFormSubmit.bind(this)}
                       cssClasses={cssClasses}
                       handleSelect={this.handleSelect.bind(this)}
        />
    }
}

export default SearchContainer;