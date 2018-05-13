import React, {Component} from 'react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete'
import $ from 'jquery'

class Search extends Component {
    constructor() {
        super()
        this.position = {
            left: 0,
            width: 0
        }
        this.getDrawerPosition = this.getDrawerPosition.bind(this)
    }

    componentDidMount() {
        const {address} = this.props
        const button = document.createElement('input');
        button.type = 'button'
        button.id = 'home_search_button'
        button.name = 'search_click'
        button.value = '검색'
        $('#PlacesAutocomplete__root').append(button)
        button.addEventListener('click', () => this.props.handleSelect(address));

        window.addEventListener('resize', this.getDrawerPosition)
        this.getDrawerPosition()
    }

    componentWillUnmount() {
        const {address} = this.props
        const button = document.getElementById('home_search_button');
        button.removeEventListener('click', () => this.props.handleSelect(address))
        window.removeEventListener('resize', this.getDrawerPosition)
    }

    getDrawerPosition() {
        const domEl = document.getElementById('search_bar')
        const rect = domEl.getBoundingClientRect()
        const docEl = document.documentElement
        const body = document.body
        const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
        const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft

        this.position = {
            width: rect.width - 20,
            height: rect.height,
            top: rect.top + rect.height + scrollTop,
            left: rect.left + scrollLeft
        };
    }

    render() {
        const styles = {
            autocompleteContainer: {
                left: this.position.left + 'px',
                width: this.position.width + 'px',
                backgroundColor: '#fff',
                zIndex: '1000',
                borderRadius: '2px',
                borderTop: '1px solid #d9d9d9',
                fontFamily: 'Arial, sans-serif',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                boxSizing: 'border-box',
                overflow: 'hidden'
            }
        }
        const cssClasses = {
            input: '',
            //autocompleteContainer: 'pac-container',
            autocompleteItem: 'pac-item',
            autocompleteItemActive: 'pac-item-selected pac-item-selected:hover'
        }
        const options = {
            types: ['geocode'],
            componentRestrictions: {country: 'kr'}
        }

        return (
            <form className="search" name="main_search">
                <fieldset>
                    <PlacesAutocomplete
                        inputProps={this.props.inputProps}
                        classNames={cssClasses}
                        options={options}
                        shouldFetchSuggestions={this.props.shouldFetchSuggestions}
                        googleLogo={false}
                        autocompleteItem={this.props.autocompleteItem}
                        styles={styles}
                        onSelect={this.props.handleSelect}
                        onEnterKeyDown={this.props.handleSelect}
                    />
                </fieldset>
                <div className="huesik">
                    <a ng-click="moveView('5a24fc784d07bbff4160aff7', '휴식 사가정 본점')" target="_blank">
                    </a>
                </div>
            </form>
        )
    }
};

export default Search;