import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import $ from 'jquery'

import DescContainer from "./components/Desc/DescContainer";
import ImageViewContainer from "./components/ImageView/ImageViewContainer";
import OptionContainer from "./components/Option/OptionContainer";
import MapContainer from "./components/Map/MapContainer";
import InfoContainer from "./components/Info/InfoContainer";
import MenuContainer from "./components/Menu/MenuContainer";

import {getIsLoggedIn, getIsWonjang, getUserData} from "../../reducers/user";
import {fetchHeader} from "../../data/consts";
import {toggleLoginPopup} from "../../actions";

class View extends Component {
    constructor() {
        super()
        this.state = {
            success: false,
            data: null,
            phonePopup: false,
            isFavorite: false,
            favoriteData: {}
        }
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

    componentWillMount() {
        document.getElementsByTagName('body')[0].setAttribute('class', 'sub_search_list');
    }


    componentWillUnmount() {
        $('meta[name=description]').attr('content', '고시원 찾을 땐? 고시원 구할 땐? 고시락')
        $('meta[name=title]').attr('content', '고시락');
        document.title = '고시락';
    }

    async componentDidMount() {
        const {match, userData, isLoggedIn} = this.props
        const id = match.params.id

        try {
            const data = await fetch(`/api/kosiwons/${id}`, {
                method: 'GET',
                headers: fetchHeader
            })
            const kosiwon = await data.json()
            await this.setStateAsync({
                success: true,
                data: kosiwon
            })
            $('meta[name=description]').attr('content', kosiwon.descriptionHP || kosiwon.intro);
            $('meta[name=title]').attr('content', kosiwon.titleHP || kosiwon.kosiwonName);
            document.title = kosiwon.titleHP || kosiwon.kosiwonName;
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

                const newRecentViewList = [newRecentView, ...recentViewList].slice(0, 50)
                localStorage.setItem('recentViewList', JSON.stringify(newRecentViewList))
            }
        } else {
            try {
                const recent = await fetch('/api/myKosiwons/listBySearchOption', {
                    method: 'POST',
                    headers: fetchHeader,
                    body: JSON.stringify({
                        andOption: [
                            {key: 'kosiwonId', value: id},
                            {key: 'type', value: 'V'}
                        ],
                        orOption: [],
                        sortOption: '-created',
                        pageNo: 1,
                        pageSize: 1
                    })
                })

                const recentData = await recent.json()
                const recentDataKosiwon = (recentData.items && recentData.items[0] && recentData.items[0])

                if (recentData.totalItems > 0) {
                    await fetch(`/api/myKosiwons/${recentDataKosiwon.id}`, {
                        method: 'PUT',
                        headers: fetchHeader,
                        body: JSON.stringify({
                            ...recentDataKosiwon,
                            updated: new Date()
                        })
                    })
                } else {
                    await fetch('/api/myKosiwons', {
                        method: 'POST',
                        headers: fetchHeader,
                        body: JSON.stringify({
                            type: 'V',
                            kosiwonId: id,
                            createdBy: userData._id,
                            updatedBy: userData._id
                        })
                    })
                }

                const favorite = await fetch('/api/myKosiwons/listBySearchOption', {
                    method: 'POST',
                    headers: fetchHeader,
                    body: JSON.stringify({
                        andOption: [
                            {key: 'kosiwonId', value: id},
                            {key: 'type', value: 'F'}
                        ],
                        orOption: [],
                        sortOption: '-created',
                        pageNo: 1,
                        pageSize: 1
                    })
                })

                const favoriteData = await favorite.json()
                let isFavorite = false
                if (favoriteData.totalItems > 0) {
                    isFavorite = true
                }
                this.setStateAsync({
                    favoriteData: favoriteData.items[0],
                    isFavorite
                })
            } catch (e) {
                console.log(`error! ${e}`)
            }
        }
    }

    async toggleFavorite() {
        const {isFavorite, favoriteData} = this.state
        const {isLoggedIn, toggleLoginPopup, userData, match} = this.props
        const id = match.params.id

        if (!isLoggedIn) {
            return toggleLoginPopup()
        }

        try {
            if (isFavorite) {
                const result = await fetch(`/api/myKosiwons/${favoriteData._id}`, {
                    method: 'DELETE',
                    headers: fetchHeader,
                    body: JSON.stringify(favoriteData)
                })

                if (result.ok) {
                    this.setStateAsync({
                        isFavorite: false,
                        favoriteData: {}
                    })
                }
            } else {
                const favorite = await fetch('/api/myKosiwons/', {
                    method: 'POST',
                    headers: fetchHeader,
                    body: JSON.stringify({
                        type: 'F',
                        kosiwonId: id,
                        createdBy: userData.id,
                        updatedBy: userData.id
                    })
                })

                const favoriteData = await favorite.json()
                this.setStateAsync({
                    isFavorite: true,
                    favoriteData
                })
            }
        } catch (e) {
            console.log('error', e)
        }
    }

    render() {
        const {success, phonePopup, isFavorite} = this.state
        const {isWonjang} = this.props
        if (success) {
            const {
                _id,
                description,
                optionAircon,
                optionBed,
                optionCloset,
                optionDesk,
                optionFan,
                optionRefrigerator,
                isElevator,
                isMeal,
                isParking,
                isPublic,
                isRestRoom,
                isSeparate,
                isWoman,
                kosiwonAddress,
                location,
                kosiwonName,
                kosiwonPhoneNo,
                kosiwonUrl,
                kosiwonBlogUrl,
                kosiwonVirtualNo,
                kosiwonZipcode,
                imageList,
                priceMax,
                priceMin,
                floor,
                nanbangType,
                priority
            } = this.state.data
            return (
                <div className="contentWrapper">
                    <div className="sub_detail_wrapper">
                        <div id="sub_detail">
                            <ImageViewContainer
                                priority={priority}
                                imageList={imageList}/>
                            <MenuContainer
                                id={_id}
                                kosiwonName={kosiwonName}
                                kosiwonPhoneNo={kosiwonPhoneNo}
                                kosiwonUrl={kosiwonUrl}
                                kosiwonBlogUrl={kosiwonBlogUrl}
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
                                isFavorite={isFavorite}
                                toggleFavorite={this.toggleFavorite.bind(this)}
                                isWonjang={isWonjang}/>
                            <MapContainer
                                location={location}
                                kosiwonAddress={kosiwonAddress}
                                kosiwonName={kosiwonName}/>
                            <InfoContainer
                                floor={floor}
                                isElevator={isElevator}
                                isMeal={isMeal}
                                isParking={isParking}
                                nanbangType={nanbangType}
                                isRestRoom={isRestRoom}
                                isSeparate={isSeparate}
                                isWoman={isWoman}/>
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
        toggleLoginPopup: toggleLoginPopup,
        userData: getUserData(state.user),
        isWonjang: getIsWonjang(state.user)
    }),
    {
        toggleLoginPopup
    }
)(View)