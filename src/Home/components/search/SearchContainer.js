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
        const AutocompleteItem = ({ formattedSuggestion }) => (
            <div className="Demo__suggestion-item">
                <i className="fa fa-map-marker Demo__suggestion-icon" />
                <strong>{formattedSuggestion.mainText}</strong>{' '}
                <small className="text-muted">
                    {formattedSuggestion}
                </small>
            </div>
        )

        const Footer = () => (
            <div className="Demo__dropdown-footer">
                <div>
                    <img
                        src={''}
                        className="Demo__dropdown-footer-image"
                    />
                </div>
            </div>
        )

        const shouldFetchSuggestions = ({ value }) => value.length > 2

        const onError = (status, clearSuggestions) => {
            console.log(
                'Error happened while fetching suggestions from Google Maps API',
                status
            )
            clearSuggestions()
        }
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
            onBlur: () => false,
            type: 'search',
            name: 'search_bar',
            placeholder: '지역명, 지하철역명, 대학교명을 입력하세요.'
        }
        const cssClasses = {
            input: ''
        }
        const options = {
            types: ['geocode'],
            componentRestrictions: {country: 'kr'}
        }
        return <Search inputProps={inputProps}
                       handleFormSubmit={this.handleFormSubmit.bind(this)}
                       cssClasses={cssClasses}
                       options={options}
                       handleSelect={this.handleSelect.bind(this)}
                       shouldFetchSuggestions={shouldFetchSuggestions}
                       Footer={Footer}
                       AutocompleteItem={AutocompleteItem}
        />
    }
}

export default SearchContainer;