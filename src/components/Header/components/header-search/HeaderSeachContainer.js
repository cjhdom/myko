import React, {Component} from 'react';
import HeaderSearch from './HeaderSearch';
import {geocodeByAddress, getLatLng} from "react-places-autocomplete";
import {withRouter} from "react-router";

class HeaderSearchContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {address: ''}
        this.onChange = this.onChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(address) {
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
            type: 'search',
            name: 'testtest',
            id: 'testtest',
            placeholder: '검색'
        }

        return <HeaderSearch inputProps={inputProps}
                             handleSelect={this.handleSelect}
                             shouldFetchSuggestions={shouldFetchSuggestions}
                             autocompleteItem={AutocompleteItem}
        />
    }
};

export default withRouter(HeaderSearchContainer)