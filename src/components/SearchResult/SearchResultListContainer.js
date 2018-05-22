import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchList from "./SearchList";
import {withRouter} from "react-router";
import {fetchHeader} from "../../data/consts";

class SearchResultListContainer extends Component {
    constructor (props) {
        super(props)
        this.doToggleClusterList = this.doToggleClusterList.bind(this)
        this.moveView = this.moveView.bind(this)
        this.goPage = this.goPage.bind(this)
        this.toggleList = this.toggleList.bind(this)
    }

    moveView (id) {
        this.props.history.push(`/View/${id}`)
    }

    doToggleClusterList (isShowClusterList) {
        console.log(isShowClusterList)
        const {setParentState} = this.props
        setParentState({
            isShowClusterList
        })
    }

    toggleList () {
        const {setParentState, isShowMap} = this.props
        setParentState({
            isShowMap: !isShowMap
        })
    }

    async goPage (nextPageNo) {
        const {setParentStateAsync, itemList} = this.props
        try {
            const fetchResult = await fetch('http://www.kosirock.co.kr/api/kosiwons/listByIdListWithPaging', {
                method: 'POST',
                headers: fetchHeader,
                body: JSON.stringify({
                    projectOption: {
                        kosiwonName: 1,
                        priceMin: 1,
                        priceMax: 1,
                        intro: 1,
                        isParking: 1,
                        isMeal: 1,
                        isSeparate: 1,
                        isRestRoom: 1,
                        thumbnailUri: 1,
                        location: 1
                    },
                    idArrayList: itemList,
                    sortOption: {priority: -1, thumbnailUri: -1},
                    pageNo: nextPageNo,
                    pageSize: 10
                })
            })

            let clusterList = []

            if (fetchResult.ok) {
                const result = await fetchResult.json()
                clusterList = result.items
                if (result.totalItems % this.pageSize === 0) {
                    this.totalPages = Math.floor(result.totalItems / this.pageSize);
                } else {
                    this.totalPages = Math.floor(result.totalItems / this.pageSize) + 1;
                }

                this.pageNoList = []
                const div = Math.floor((nextPageNo - 1) / 10);
                this.startIndex = div * 10 + 1;
                this.endIndex = this.totalPages > (this.startIndex + 9) ? this.startIndex + 9 : this.totalPages;
                this.startIndex = this.endIndex - (this.startIndex + 9) > 0 ? this.startIndex : this.endIndex - 9;
                if (this.startIndex < 1) this.startIndex = 1;

                for (let i = this.startIndex; i <= this.endIndex; i++) {
                    this.pageNoList.push(i);
                }
                setParentStateAsync({
                    pageNo: nextPageNo,
                    clusterList
                })
            }
        } catch (e) {
        }
    }

    render() {
        const {
            clusterList,
            pageNoList,
            totalPages,
            pageNo,
            isShowClusterList,
            isShowMap
        } = this.props
        return (
            <SearchList doToggleClusterList={this.doToggleClusterList}
                        toggleList={this.toggleList}
                        moveView={this.moveView}
                        goPage={this.goPage}
                        clusterList={clusterList}
                        pageNoList={pageNoList}
                        totalPages={totalPages}
                        pageNo={pageNo}
                        isShowClusterList={isShowClusterList}
                        isShowMap={isShowMap}
            />
        );
    }
}

SearchResultListContainer.propTypes = {};

export default withRouter(SearchResultListContainer);
