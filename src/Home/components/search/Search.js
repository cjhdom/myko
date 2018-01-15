import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete'

const Search = ({inputProps, handleFormSubmit, handleSelect, cssClasses}) => {
    return (
        <form className="search" name="main_search" onSubmit={handleFormSubmit}>
            <fieldset>
                <PlacesAutocomplete
                    inputProps={inputProps}
                    classNames={cssClasses}
                    handleSelect={handleSelect}
                />
                <input type="button" name="search_click" value="검색"
                       ng-click="doMoveKosiwonSearch(place)"/>
            </fieldset>
            <div className="huesik">
                <a ng-click="moveView('5a24fc784d07bbff4160aff7', '휴식 사가정 본점')" target="_blank">
                </a>
            </div>
        </form>)
};

export default Search;