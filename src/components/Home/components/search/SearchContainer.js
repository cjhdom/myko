import React, {Component} from 'react';
import Search from './Search';
import {geocodeByAddress, getLatLng} from 'react-places-autocomplete'
import {withRouter} from "react-router";

class SearchContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {address: ''}
        this.onChange = this.onChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleFormSubmit(event) {
        event.preventDefault()

        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error))
    }

    handleSelect() {
        event.preventDefault()
        const {address} = this.state
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.props.history.push(`/search?latitude=${latLng.lat}&longitude=${latLng.lng}`))
    }

    onChange(address) {
        this.setState({
            ...this.state,
            address
        })
    }

    render() {
        const AutocompleteItem = ({formattedSuggestion}) => (
            <div className="pac-item">
                <i className="pac-icon hdpi"/>
                <strong>{formattedSuggestion.mainText}</strong>{' '}
                <small className="text-muted">
                    {formattedSuggestion.secondaryText}
                </small>
            </div>
        )

        const shouldFetchSuggestions = ({value}) => value.length > 2

        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
            onBlur: () => false,
            type: 'search',
            name: 'search_bar',
            id: 'search_bar',
            placeholder: '지역명, 지하철역명, 대학교명을 입력하세요.'
        }

        return <Search inputProps={inputProps}
                       handleFormSubmit={this.handleFormSubmit.bind(this)}
                       handleSelect={this.handleSelect.bind(this)}
                       shouldFetchSuggestions={shouldFetchSuggestions}
                       autocompleteItem={AutocompleteItem}
        />
    }
}

export default withRouter(SearchContainer);