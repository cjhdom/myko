import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import DescContainer from "./components/Desc/DescContainer";
import ImageViewContainer from "./components/ImageView/ImageViewContainer";
import OptionContainer from "./components/Option/OptionContainer";
import MapContainer from "./components/Map/MapContainer";
import InfoContainer from "./components/Info/InfoContainer";
import MenuContainer from "./components/Menu/MenuContainer";

import {getIsLoggedIn} from "../reducers/user";
import {fetchHeader} from "../data/consts";
import {toggleLoginPopup} from "../actions";

class View extends Component {
    constructor() {
        super()
        this.state = {
            success: false,
            data: null,
            phonePopup: false,
            isFavorite: false
        }
        this.favoriteData = {};
    }

    togglePhonePopup() {
        this.setState({
            ...this.state,
            phonePopup: !this.state.phonePopup
        })
    }

    setStateAsync(newState) {
        return new Promise(resolve =>
            resolve(this.setState({...this.state, ...newState}))
        )
    }

    async componentWillMount() {
        const {match, isLoggedIn} = this.props
        const id = match.params.id
        document.getElementsByTagName('body')[0].setAttribute('class', 'sub_search_list');
        try {
            const data = await fetch(`http://www.kosirock.co.kr/api/kosiwons/${id}`, {
                method: 'GET',
                headers: fetchHeader
            })
            await this.setStateAsync({
                success: true,
                data: await data.json()
            })
        } catch (e) {
            console.log(`error! ${e}`)
        }

        if (!isLoggedIn) {
            const recentViewList = localStorage.getItem('recentViewList')
                ? JSON.parse(localStorage.getItem('recentViewList')) : []
            if (!recentViewList.some(recent => recent.id === id)) {
                const {
                    thumbnailUri,
                    kosiwonName,
                    priceMax,
                    priceMin,
                    description,
                    isMeal,
                    isParking,
                    isRestRoom,
                    isSeparate
                } = this.state.data

                const newRecentView = {
                    id,
                    thumbnailUri,
                    kosiwonName,
                    priceMax,
                    priceMin,
                    description,
                    isMeal,
                    isParking,
                    isRestRoom,
                    isSeparate
                }

                const newRecentViewList = [newRecentView, ...recentViewList].slice(0, 10)
                localStorage.setItem('recentViewList', JSON.stringify(newRecentViewList))
            }
        }
    }

    async componentDidMount() {
        const {match} = this.props
        const id = match.params.id
        try {
            const data1 = await fetch('http://www.kosirock.co.kr/api/myKosiwons/listBySearchOption', {
                method: 'POST',
                headers: fetchHeader,
                body: JSON.stringify({
                    andOption: [
                        { key: 'kosiwonId', value: this.state.data },
                        { key: 'type',      value: 'V' }
                    ],
                    orOption: [],
                    sortOption:   '-created',
                    pageNo:        1,
                    pageSize:      1
                })
            })
            const result = await data1.json()

            await fetch(`http://www.kosirock.co.kr/api/myKosiwons/${result.items[0]._id}`, {
                method: 'PUT',
                headers: fetchHeader,
                body: JSON.stringify(result.items[0])
            })

            const favorite = await fetch('http://www.kosirock.co.kr/api/myKosiwons/listBySearchOption', {
                method: 'POST',
                headers: fetchHeader,
                body: JSON.stringify({
                    andOption: [
                        { key: 'kosiwonId', value: id },
                        { key: 'type',      value: 'V' }
                    ],
                    orOption: [],
                    sortOption:   '-created',
                    pageNo:        1,
                    pageSize:      1
                })
            })

            this.favoriteData = (await favorite.json()).items[0]
        } catch (e) {
            console.log(`error! ${e}`)
        }
    }

    async toggleFavorite() {
        const {isFavorite} = this.state
        const {isLoggedIn, toggleLoginPopup} = this.props

        if (!isLoggedIn) {
            return toggleLoginPopup()
        }

        try {
            if (isFavorite) {
                const result = await fetch(`http://www.kosirock.co.kr/api/myKosiwons/${this.favoriteData._id}`, {
                    method: 'DELETE',
                    headers: fetchHeader
                })

                if (result.ok) {
                    this.setStateAsync({
                        isFavorite: !isFavorite
                    })
                    this.favoriteData = await result.json()
                }
            } else {
                const favorite = await fetch('http://www.kosirock.co.kr/api/myKosiwons/listBySearchOption', {
                    method: 'POST',
                    headers: fetchHeader,
                    body: JSON.stringify({
                        andOption: [
                            { key: 'kosiwonId', value: id },
                            { key: 'type',      value: 'V' }
                        ],
                        orOption: [],
                        sortOption:   '-created',
                        pageNo:        1,
                        pageSize:      1
                    })
                })

                this.favoriteData = (await favorite.json()).items[0]
            }
        } catch (e) {
            console.log('error', e)
        }
    }

    render() {
        const {match} = this.props
        const id = match.params.id
        const {success, phonePopup, isFavorite} = this.state
        if (success) {
            const {
                description,
                optionAircon,
                optionBed,
                optionCloset,
                optionDesk,
                optionFan,
                optionRefrigerator,
                isAlarmByKosirock,
                isAlarmByOnwer,
                isElevator,
                isMeal,
                isParking,
                isPromotion,
                isPublic,
                isReAuctionAlarm,
                isRestRoom,
                isSeparate,
                isWoman,
                minorAddress,
                majorAddress,
                location,
                kosiwonName,
                kosiwonPhoneNo,
                kosiwonUrl,
                kosiwonVirtualNo,
                kosiwonZipcode,
                imageList,
                priceMax,
                priceMin,
                floor
            } = this.state.data
            return (
                <div className="contentWrapper">
                    <div className="sub_detail_wrapper">
                        <div id="sub_detail">
                            <ImageViewContainer
                                imageList={imageList}/>
                            <MenuContainer
                                kosiwonName={kosiwonName}
                                kosiwonPhoneNo={kosiwonPhoneNo}
                                kosiwonUrl={kosiwonUrl}
                                kosiwonVirtualNo={kosiwonVirtualNo}
                                kosiwonZipcode={kosiwonZipcode}
                                isMeal={isMeal}
                                isParking={isParking}
                                isRestRoom={isRestRoom}
                                isSeparate={isSeparate}
                                priceMax={priceMax}
                                priceMin={priceMin}
                                togglePhonePopup={this.togglePhonePopup.bind(this)}
                                phonePopup={phonePopup}
                                isFavorite={isFavorite}/>
                            <MapContainer
                                location={location}
                                majorAddress={majorAddress}/>
                            <InfoContainer
                                floor={floor}
                                isAlarmByKosirock={isAlarmByKosirock}
                                isAlarmByOnwer={isAlarmByOnwer}
                                isElevator={isElevator}
                                isMeal={isMeal}
                                isParking={isParking}
                                isPromotion={isPromotion}
                                isPublic={isPublic}
                                isReAuctionAlarm={isReAuctionAlarm}
                                isRestRoom={isRestRoom}
                                isSeparate={isSeparate}
                                isWoman={isWoman}
                                minorAddress={minorAddress}/>
                            <OptionContainer
                                optionAircon={optionAircon}
                                optionBed={optionBed}
                                optionCloset={optionCloset}
                                optionDesk={optionDesk}
                                optionFan={optionFan}
                                optionRefrigerator={optionRefrigerator}/>
                            <DescContainer desc={description}/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

View.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

export default connect(
    state => ({
        isLoggedIn: getIsLoggedIn(state.user),
        toggleLoginPopup: toggleLoginPopup
    })
)(View)