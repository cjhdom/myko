import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchMenu from "./SearchMenu";
import SearchResultListContainer from "./SearchResultListContainer";
import SearchResultMapContainer from "./SearchResultMapContainer";
import $ from 'jquery'
import {withRouter} from "react-router";
import {every} from 'lodash'
import {parse} from 'query-string'

const checkIsAllSelected = original => every(original)

class SearchResultContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowMap: true,
            priceRange: {
                priceMin: '0',
                priceMax: '0'
            },
            detailOptions: {
                isAllSelected: false,
                isParking: false,
                isMeal: false,
                isWoman: false,
                isSeparate: false,
                isRestRoom: false,
                isElevator: false
            },
            roomOptions: {
                isAllSelected: false,
                optionDesk: false,
                optionBed: false,
                optionCloset: false,
                optionFan: false,
                optionAircon: false,
                optionRefrigerator: false
            },
            isShowClusterList: false,
            pageNo: 0,
            pageNoList: [],
            clusterList: [],
            itemList: [],
            totalPages: 0
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnChangeAll = this.handleOnChangeAll.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.setParentState = this.setParentState.bind(this)
        this.setParentStateAsync = this.setParentStateAsync.bind(this)
    }

    handleSelect(e) {
        const {id, value} = e.target

        this.setState({
            ...this.state,
            priceRange: {
                ...this.state.priceRange,
                [id]: value
            }
        })
    }

    handleOnChange(e, original) {
        const {id, value} = e.target

        this.setState({
            ...this.state,
            [original]: {
                ...this.state[original],
                [id]: parseInt(value) ? value : !this.state[original][id]
            }
        }, () => {
            const {isAllSelected, ...originalFiltered} = this.state[original]
            this.setState({
                ...this.state,
                [original]: {
                    ...this.state[original],
                    isAllSelected: checkIsAllSelected(originalFiltered)
                }
            })
        })
    }

    handleOnChangeAll(e, original) {
        const {isAllSelected} = this.state[original]
        this.setState({
            ...this.state,
            [original]: Object.keys(this.state[original]).reduce((result, key) => {
                return {
                    ...result,
                    [key]: !isAllSelected
                }
            }, {})
        })
    }

    componentDidMount() {
        document.getElementsByTagName('body')[0].setAttribute('class', 'sub_search_list');

        $('a[href="#"]').on('click', function (e) {
            e.preventDefault();
        });

        //세부옵션 열기
        $('#map .filter > li > p.dt_option a').on('mouseenter', function () {
            $('#map .filter > li form.dt_option').css({'display': 'block'});
        });
        $('#map .filter > li').on('mouseleave', function () {
            $('#map .filter > li form.dt_option').css({'display': 'none'});
        });

        //내부옵션 열기
        $('#map .filter > li > p.in_option a').on('mouseenter', function () {
            $('#map .filter > li form.in_option').css({'display': 'block'});
        });

        $('#map .filter > li').on('mouseleave', function () {
            $('#map .filter > li form.in_option').css({'display': 'none'});
        });
    }

    setParentState(newState) {
        this.setState({
            ...this.state,
            ...newState
        })
    }

    setParentStateAsync(newState) {
        return new Promise(resolve =>
            resolve(this.setState({...this.state, ...newState}))
        )
    }

    render() {
        const {
            isShowMap,
            priceRange,
            detailOptions,
            roomOptions,
            pageNo,
            pageNoList,
            clusterList,
            totalPages,
            isShowClusterList,
            itemList
        } = this.state
        const {location} = this.props
        const {longitude, latitude} = parse(location.search)

        return (
            <div id="contentWrapper">
                <div id="main_search_list">
                    <div id={isShowMap ? 'map' : 'list_filter'}>
                        <SearchMenu priceRange={priceRange}
                                    detailOptions={detailOptions}
                                    roomOptions={roomOptions}
                                    handleOnChange={this.handleOnChange}
                                    handleOnChangeAll={this.handleOnChangeAll}
                                    handleSelect={this.handleSelect}
                                    setParentState={this.setParentState}/>
                        {isShowMap && <SearchResultMapContainer longitude={longitude}
                                                                latitude={latitude}
                                                                priceRange={priceRange}
                                                                detailOptions={detailOptions}
                                                                roomOptions={roomOptions}
                                                                setParentState={this.setParentState}
                                                                setParentStateAsync={this.setParentStateAsync}
                                                                key={longitude + '' + latitude}
                        />}
                        {isShowClusterList && <SearchResultListContainer pageNo={pageNo}
                                                                         pageNoList={pageNoList}
                                                                         clusterList={clusterList}
                                                                         totalPages={totalPages}
                                                                         setParentState={this.setParentState}
                                                                         setParentStateAsync={this.setParentStateAsync}
                                                                         isShowClusterList={isShowClusterList}
                                                                         itemList={itemList}
                                                                         isShowMap={isShowMap}
                        />}
                    </div>
                </div>
            </div>
        );
    }
}

SearchResultContainer.propTypes = {};

export default withRouter(SearchResultContainer);
