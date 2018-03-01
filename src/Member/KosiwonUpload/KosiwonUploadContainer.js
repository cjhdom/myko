import React, {Component} from 'react';
import {connect} from 'react-redux'
import KosiwonUpload from "./KosiwonUpload";
import DaumPostcode from 'react-daum-postcode';
import {uploadKosiwon, routeTo} from "../../actions";
import {getIsWonjang, getUserData} from "../../reducers/user";
import {fetchHeader} from "../../data/consts";

class KosiwonUploadContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowPopup: false,
            isUpdate: false
        }
        this.togglePopup = this.togglePopup.bind(this)
    }

    onChanged(e) {
        const {id, value} = e.target
        const newState = {}
        newState[id] = value
        this.setState({
            ...this.state,
            ...newState
        })
    }

    onToggle(e) {
        const {id} = e.target
        const value = !this.state[id]
        let newState = {}
        newState[id] = value
        this.setState({
            ...this.state,
            ...newState
        })
    }

    togglePopup() {
        this.setState({
            ...this.state,
            isShowPopup: !this.state.isShowPopup
        })
    }

    async componentDidMount() {
        const {isWonjang, routeTo} = this.props
        if (!isWonjang) {
            routeTo('/')
        }

        const id = this.props.match.params.id

        if (id !== '-1') {
            try {
                const data = await fetch(`http://www.kosirock.co.kr/api/kosiwons/${id}`, {
                    method: 'GET',
                    headers: fetchHeader
                })
                const result = await data.json()
                this.setStateAsync({
                    ...result,
                    isUpdate: true
                })
            } catch (e) {
                console.log(e)
            }
        }
    }

    setStateAsync(newState) {
        return new Promise(resolve =>
            resolve(this.setState({...this.state, ...newState}))
        )
    }

    handleAddress(data) {
        let majorAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            majorAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        let newState = {
            majorAddress,
            kosiwonZipcode: data.zonecode
        }
        this.setState({
            ...this.state,
            ...newState
        })
        this.togglePopup()
    }

    onKosiwonRegisterClicked(e) {
        const {
            isParking,
            isMeal,
            isWoman,
            isSeparate,
            isRestRoom,
            isElevator,
            optionDesk,
            optionBed,
            optionCloset,
            optionFan,
            optionAircon,
            optionRefrigerator,
            kosiwonName,
            kosiwonPhoneNo,
            kosiwonZipcode,
            majorAddress,
            minorAddress,
            floor,
            priceMin,
            priceMax,
            intro,
            description,
            isUpdate
        } = this.state
        const {userData, uploadKosiwon} = this.props
        const id = this.props.match.params.id

        if (this.validationCheck(kosiwonName, kosiwonPhoneNo, kosiwonZipcode, priceMin, priceMax, intro, description)) {
            uploadKosiwon(isParking, isMeal, isWoman, isSeparate, isRestRoom, isElevator, optionDesk, optionBed,
                optionCloset, optionFan, optionAircon, optionRefrigerator, kosiwonName, kosiwonPhoneNo, kosiwonZipcode,
                majorAddress, minorAddress, floor, priceMin, priceMax, intro, description, userData._id, id)
        }
    }

    validationCheck(kosiwonName, kosiwonPhoneNo, kosiwonZipcode, priceMin, priceMax, intro, description) {
        if (!kosiwonName) {
            alert('고시원 이름은 필수 입력 항목입니다.');
            return false;
        }

        if (!kosiwonPhoneNo) {
            alert('고시원 전화번호는 필수 입력 항목입니다.');
            return false;
        }

        if (!kosiwonZipcode) {
            alert('고시원 주소는 필수 입력 항목입니다.');
            return false;
        }

        if (!priceMin) {
            alert('가격은 필수 입력 항목입니다.');
            return false;
        }

        if (!priceMax) {
            alert('가격은 필수 입력 항목입니다.');
            return false;
        }

        if (!intro) {
            alert('한줄소개는 필수 입력 항목입니다.');
            return false;
        }

        if (!description) {
            alert('고시원 상세 설명은 필수 입력 항목입니다.');
            return false;
        }

        return true;
    }

    render() {
        const {isShowPopup} = this.state
        const props = {style: {height: '100%'}}
        return (
            <div>
                <KosiwonUpload onChanged={this.onChanged.bind(this)}
                               onToggle={this.onToggle.bind(this)}
                               togglePopup={this.togglePopup}
                               onKosiwonRegisterClicked={this.onKosiwonRegisterClicked.bind(this)}
                               {...this.state}/>
                {isShowPopup && <div className="popup">
                    <div style={{
                        width: '60%',
                        zIndex: '1000002',
                        height: '60%',
                        position: 'absolute',
                        background: '#ffffff',
                        top: '20%',
                        left: '20%',
                        textAlign: 'center',
                        autoClose: true
                    }}>
                        <div>
                            <div style={{
                                float: 'center',
                                position: 'relative',
                                height: '50px',
                                top: '10px',
                                fontWeight: 'bold',
                                fontSize: '16px'
                            }}>
                                주소찾기
                                <div style={{position: 'relative', float: 'right', fontSize: '12px'}}>
                                    <a onClick={this.togglePopup}>닫기</a>
                                </div>
                            </div>
                        </div>
                        <DaumPostcode
                            onComplete={this.handleAddress.bind(this)}
                            {...props} />
                    </div>
                    <div className="cancel" onClick={this.togglePopup}/>
                </div>}
            </div>
        );
    }
}

KosiwonUploadContainer.propTypes = {};

export default connect(
    state => ({
        isWonjang: getIsWonjang(state.user),
        userData: getUserData(state.user)
    }),
    {
        uploadKosiwon,
        routeTo
    }
)(KosiwonUploadContainer);
