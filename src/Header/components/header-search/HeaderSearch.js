import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete from 'react-places-autocomplete'
import $ from "jquery";

class HeaderSearch extends Component {
    constructor() {
        super()
        this.position = {
            left: 0,
            width: 0
        }
        this.getDrawerPosition = this.getDrawerPosition.bind(this)
    }

    componentDidMount() {
        this.handleSelect = this.props.handleSelect.bind(this)

        const button = document.createElement('input');
        button.type = 'button'
        button.id = 'home_search_button'
        button.name = 'search_click'
        button.value = '검색'
        $('#PlacesAutocomplete__root').append(button)
        button.addEventListener('click', this.clickSearch);

        window.addEventListener('resize', this.getDrawerPosition)
        this.getDrawerPosition()
    }

    componentWillUnmount() {
        const button = document.getElementById('home_search_button');
        button.removeEventListener('click', this.clickSearch)
        window.removeEventListener('resize', this.getDrawerPosition)
    }

    getDrawerPosition() {
        const domEl = document.getElementById('testtest')
        const rect = domEl.getBoundingClientRect()
        const docEl = document.documentElement
        const body = document.body
        const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop

        this.position = {
            width: rect.width,
            height: rect.height,
            top: rect.top + rect.height + scrollTop,
            left: 0
        };
        this.handleSelect(this.props.inputProps.value)
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
            <form className="header_search" name="header_search" id="header_search" onSubmit={this.props.handleFormSubmit}
                  style={{marginBottom: '1em', marginTop: '0em'}}>
                <PlacesAutocomplete
                    inputProps={this.props.inputProps}
                    classNames={cssClasses}
                    handleSelect={this.props.handleSelect}
                    options={options}
                    shouldFetchSuggestions={this.props.shouldFetchSuggestions}
                    googleLogo={false}
                    autocompleteItem={this.props.autocompleteItem}
                    styles={styles}
                />
            </form>
        );
    }
}

HeaderSearch.propTypes = {};

export default HeaderSearch;
