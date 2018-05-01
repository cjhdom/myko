import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchMenu from "./SearchMenu";
import SearchResultList from "./SearchResultList";
import SearchResultMapContainer from "./SearchResultMapContainer";
import $ from 'jquery'
import {withRouter} from "react-router";
import {fetchHeader} from "../data/consts";
import {every} from 'lodash'
import {parse} from 'query-string'

const checkIsAllSelected = original => every(original)

const parseOptions = options => (
    Object.keys(options).map(_ => ({
        key: _,
        value: options[_]
    })).filter(_ => _.value)
)

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
            items: []
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnChangeAll = this.handleOnChangeAll.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    async callApi() {
        const {priceRange, detailOptions, roomOptions} = this.state
        const {match} = this.props
        const {longitude, latitude} = match.params

        const detailOptionsParsed = parseOptions(detailOptions)
        const roomOptionsParsed = parseOptions(roomOptions)

        let priceRangeParsed = []

        if (priceRange.priceMin !== '0') {
            priceRangeParsed.push({
                operator: '$lte',
                type: 'number',
                key: 'priceMin',
                value: priceRange.priceMin
            })
        }

        if (priceRange.priceMax !== '0') {
            priceRangeParsed.push({
                operator: '$gte',
                type: 'number',
                key: 'priceMax',
                value: priceRange.priceMax
            })
        }

        const body = {
            andOption: {
                ...detailOptionsParsed,
                ...roomOptionsParsed,
                ...priceRangeParsed
            },
            populateOption: false,
            projectOption: {
                kosiwonAddress: 1,
                kosiwonName: 1,
                location: 1
            },
            orOption: [],
            longitude,
            latitude,
            maxDistance: false,
            minDistance: false,
            sortOption: {
                priority: -1
            },
            pageNo: 1,
            pageSize: 10000
        }

        try {
            const searchFetch = await fetch(`http://www.kosirock.co.kr/api/kosiwons/listBySearchOptionNear`, {
                method: 'POST',
                headers: fetchHeader,
                body: JSON.stringify(body)
            })

            const result = await searchFetch.json()
            const items = result.items
            await this.setStateAsync(items)
        } catch (e) {

        }
    }

    async setStateAsync(newState) {
        return new Promise(resolve => (
            resolve(this.setState({
                ...this.state,
                ...newState
            }))
        ))
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

    render() {
        const {
            isShowMap,
            items,
            priceRange,
            detailOptions,
            roomOptions
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
                                    handleSelect={this.handleSelect}/>
                        {/*{!isShowMap && <SearchResultList items={items}/>}*/}
                        {isShowMap && <SearchResultMapContainer items={items}
                                                                longitude={longitude}
                                                                latitude={latitude} />}
                    </div>
                </div>
            </div>
        );
    }
}

SearchResultContainer.propTypes = {};

export default withRouter(SearchResultContainer);
