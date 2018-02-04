import React, {Component} from 'react'
import DescContainer from "./components/Desc/DescContainer";
import ImageViewContainer from "./components/ImageView/ImageViewContainer";
import OptionContainer from "./components/Option/OptionContainer";
import MapContainer from "./components/Map/MapContainer";
import InfoContainer from "./components/Info/InfoContainer";
import MenuContainer from "./components/Menu/MenuContainer";

class View extends Component {
    constructor() {
        super()
        this.state = {
            success: false,
            data: null,
            phonePopup: false
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

    async componentDidMount() {
        document.getElementsByTagName('body')[0].setAttribute('class', 'sub_search_list');
        try {
            const {match} = this.props
            const id = match.params.id
            const data = await fetch(`http://www.kosirock.co.kr/api/kosiwons/${id}`, {
                method: 'GET',
                headers: new Headers({
                    'Accept': 'application/json, text/plain, */*'
                })
            })
            await this.setStateAsync({
                success: true,
                data: await data.json()
            })
        } catch (e) {
            console.log(`error! ${e}`)
        }
    }

    render() {
        const {match} = this.props
        const id = match.params.id
        const {success, phonePopup} = this.state
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
                                phonePopup={phonePopup}/>
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

export default View