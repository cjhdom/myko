import React, {Component} from 'react';
import HeaderSearch from './HeaderSearch';
import {geocodeByAddress} from "react-places-autocomplete";

class HeaderSearchContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {address: ''}
        this.onChange = (address) => this.setState({address})
        this.onSelect = this.onSelect.bind(this)
    }

    handleFormSubmit(event) {
        event.preventDefault()

        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error))
    }

    handleSelect(address) {
        this.setState({
            ...this.state,
            address
        })
    }

    onSelect (e) {

    }

    render () {
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
            onSelect: this.onSelect,
            type: 'search',
            name: 'testtest',
            id: 'testtest',
            placeholder: '검색'
        }

        return <HeaderSearch inputProps={inputProps}
                       handleFormSubmit={this.handleFormSubmit.bind(this)}
                       handleSelect={this.handleSelect.bind(this)}
                       shouldFetchSuggestions={shouldFetchSuggestions}
                       autocompleteItem={AutocompleteItem}
        />
    }
};

export default HeaderSearchContainer