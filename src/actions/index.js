import {push} from 'react-router-redux'
import {
    TOGGLE_LOGIN_POPUP,
    TOGGLE_DELETE_POPUP,
    TOGGLE_WONJANG_LOGIN_POPUP,
    LOGIN,
    LOGOUT
} from "../data/ActionTypes";
import {fetchHeader} from '../data/consts'
import Cookies from '../get-cookie-helper'
console.log(Cookies)

export const toggleLoginPopup = () => ({
    type: TOGGLE_LOGIN_POPUP
})

export const toggleWonjangPopup = () => ({
    type: TOGGLE_WONJANG_LOGIN_POPUP
})

export const toggleDeletePopup = () => ({
    type: TOGGLE_DELETE_POPUP
})

export const doLogin = (username, password) => async (dispatch, getState) => {
    const state = getState()
    if (!state.user.isLoggedIn) {
        const body = {
            username,
            password
        }
        try {
            const data = await fetch('http://www.kosirock.co.kr/api/users/listByNameAndPassword', {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Pragma': 'no-cache',
                    'Cache-Control': 'no-cache'
                }),
                body: JSON.stringify(body)
            })

            const result = await data.json()
            if (result.resultCode === 0) {
                const userData = {
                    ...result.user,
                    password: ''
                }
                dispatch({
                    type: LOGIN,
                    userData
                })
                Cookies.set('userData', JSON.stringify(userData))
                dispatch(push('/'))
            } else {
                alert(result.message)
            }
        } catch (e) {
            console.log(`error: ${e}`)
        }
    }
}

export const onRegisterClicked = (email, password, passwordConfirm, name, phoneNo) => async dispatch => {
    try {
        const body = {
            andOption: [{key: "username", value: email}],
            orOption: [],
            sortOption: "-created",
            pageNo: 1,
            pageSize: 10
        }
        const data = await fetch('http://www.kosirock.co.kr/api/users/listBySearchOption', {
            method: 'POST',
            headers: fetchHeader,
            body: JSON.stringify(body)
        })

        const result = await data.json()
        if (result.totalItems > 0) {
            alert('이미 사용중인 이메일입니다')
        } else {
            const registerData = await fetch('http://www.kosirock.co.kr/api/users', {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Pragma': 'no-cache',
                    'Cache-Control': 'no-cache'
                }),
                body: JSON.stringify({
                    password,
                    passwordConfirm,
                    name,
                    phoneNo,
                    email,
                    provider: "local",
                    username: email,
                    userType: "U",
                    loginType: "E"
                })
            })

            if (registerData.ok) {
                alert('축하합니다. 회원가입이 완료되었습니다.')
                const registerResult = await registerData.json()
                const userData = {
                    ...registerResult,
                    password: ''
                }
                dispatch({
                    type: LOGIN,
                    userData
                })
                sessionStorage.setItem('userData', JSON.stringify(userData))
                dispatch(push('/'))
            } else {
                const retData = await registerData.json()
                const message = retData.message
                alert(message || '회원가입중 오류가 발생하였습니다. 다시 시도해주세요')
            }
        }
    } catch (e) {
        console.log(`error: ${e}`)
    }
}

export const onWonjangRegisterClicked =
    (email, password, passwordConfirm, name, phoneNo, kosiwonName, kosiwonAddress, kosiwonPhoneNo, registrationNo, files) =>
        async dispatch => {
            try {
                const body = {
                    andOption: [{key: "username", value: email}],
                    orOption: [],
                    sortOption: "-created",
                    pageNo: 1,
                    pageSize: 10
                }
                const data = await fetch('http://www.kosirock.co.kr/api/users/listBySearchOption', {
                    method: 'POST',
                    headers: fetchHeader,
                    body: JSON.stringify(body)
                })

                const result = await data.json()
                if (result.totalItems > 0) {
                    alert('이미 사용중인 이메일입니다')
                } else {
                    const registerData = await fetch('http://www.kosirock.co.kr/api/users', {
                        method: 'POST',
                        headers: fetchHeader,
                        body: JSON.stringify({
                            password,
                            passwordConfirm,
                            name,
                            phoneNo,
                            email,
                            kosiwonName,
                            kosiwonAddress,
                            kosiwonPhoneNo,
                            registrationNo,
                            provider: "local",
                            username: email,
                            userType: "W",
                            loginType: "E"
                        })
                    })

                    if (registerData.ok) {
                        const registerResult = await registerData.json()

                        const userData = {
                            ...registerResult,
                            password: ''
                        }
                        dispatch({
                            type: LOGIN,
                            userData
                        })
                        sessionStorage.setItem('userData', JSON.stringify(userData))

                        let formData = new FormData();
                        formData.append('categoryName', 'kosiwon')
                        formData.append('dirName', registerResult._id)
                        formData.append('fileName', `${registerResult._id}_registration`)
                        formData.append('file', files)

                        const fileTest = await fetch('http://www.kosirock.co.kr/api/upload', {
                            method: 'POST',
                            body: formData
                        })

                        if (fileTest.ok) {
                            alert('축하합니다. 회원가입이 완료되었습니다.')
                        } else {
                            alert('축하합니다. 회원가입이 완료되었지만 사진 업로드 중 오류가 발생하였으니\n' +
                                '신청 내역 수정하기를 클릭하여 사진을 재업로드 해주세요')
                        }

                        dispatch(push('/members/register-wonjang-complete'))
                    } else {
                        const userData = await registerData.json()
                        const message = userData.message
                        alert(message || '회원가입중 오류가 발생하였습니다. 다시 시도해주세요')
                    }
                }
            } catch (e) {
                console.log(`error: ${e}`)
            }
        }

export const onWonjangEditClicked = (password, newPassword, newPasswordConfirm, phoneNo, kosiwonName, kosiwonAddress,
                                     kosiwonPhoneNo, registrationNo, files) => async (dispatch, getState) => {
    const state = getState()
    try {
        const userResult = await fetch('http://www.kosirock.co.kr/api/users/listByNameAndPassword', {
            method: 'POST',
            headers: fetchHeader,
            body: JSON.stringify({
                username: state.user.userData.email,
                password
            })
        })

        const result = await userResult.json()
        if (result.resultCode === 0) {
            let body = {
                ...result.user,
                password,
                phoneNo,
                kosiwonName,
                kosiwonAddress,
                kosiwonPhoneNo,
                registrationNo
            }
            if (newPassword && newPasswordConfirm) {
                body.password = newPasswordConfirm
                body.newPassword = newPasswordConfirm
                body.newPasswordConfirm = newPasswordConfirm
            }
            const editResult = await fetch(`http://www.kosirock.co.kr/api/users/${result.user._id}`, {
                method: 'PUT',
                headers: fetchHeader,
                body: JSON.stringify(body)
            })

            if (editResult.ok) {
                const editData = await editResult.json()

                dispatch({
                    type: LOGIN,
                    userData: {
                        ...editData,
                        password: ''
                    }
                })

                let formData = new FormData();
                formData.append('categoryName', 'kosiwon')
                formData.append('dirName', editData._id)
                formData.append('fileName', `${editData._id}_registration`)
                formData.append('file', files)

                const fileTest = await fetch('http://www.kosirock.co.kr/api/upload', {
                    method: 'POST',
                    body: formData
                })

                if (fileTest.ok) {
                    alert('수정 되었습니다')
                } else {
                    alert('수정되었지만 사진 업로드 중 오류가 발생하였으니\n' +
                        '신청 내역 수정하기를 클릭하여 사진을 재업로드 해주세요')
                }
            }
        } else {
            alert('현재 비밀번호가 일치하지 않습니다')
        }
    } catch (e) {
        console.log(`error: ${e}`)
    }
}

export const onUserEditClicked = (password, newPassword, newPasswordConfirm, phoneNo) => async (dispatch, getState) => {
    const state = getState()
    try {
        const userResult = await fetch('http://www.kosirock.co.kr/api/users/listByNameAndPassword', {
            method: 'POST',
            headers: fetchHeader,
            body: JSON.stringify({
                username: state.user.userData.email,
                password
            })
        })

        const result = await userResult.json()
        if (result.resultCode === 0) {
            let body = {
                ...result.user,
                password,
                phoneNo,
            }
            if (newPassword && newPasswordConfirm) {
                body.password = newPasswordConfirm
                body.newPassword = newPasswordConfirm
                body.newPasswordConfirm = newPasswordConfirm
            }
            const editResult = await fetch(`http://www.kosirock.co.kr/api/users/${result.user._id}`, {
                method: 'PUT',
                headers: fetchHeader,
                body: JSON.stringify(body)
            })

            if (editResult.ok) {
                const editData = await editResult.json()
                dispatch({
                    type: LOGIN,
                    userData: {
                        ...editData,
                        password: ''
                    }
                })
                alert('수정 되었습니다')
            }
        } else {
            alert('현재 비밀번호가 일치하지 않습니다')
        }
    } catch (e) {
        console.log(`error: ${e}`)
    }
}

export const onUnregisterClicked = (id) => async (dispatch) => {
    const unregisterResult = await fetch(`http://www.kosirock.co.kr/api/users/${id}`, {
        method: 'DELETE',
        headers: fetchHeader
    })

    if (unregisterResult.ok) {
        alert('회원탈퇴 처리가 완료되었습니다.')
        dispatch(logout())
    }
}

export const uploadKosiwon = (isParking, isMeal, isWoman, isSeparate, isRestRoom, isElevator, optionDesk, optionBed,
                              optionCloset, optionFan, optionAircon, optionRefrigerator, kosiwonName, kosiwonPhoneNo,
                              kosiwonZipcode, majorAddress, minorAddress, floor, priceMin, priceMax, intro, description,
                              userId, kosiwonId, files) => async (dispatch) => {
    try {
        const uploadResult = await fetch(`http://www.kosirock.co.kr/api/kosiwons/${kosiwonId}`, {
            method: kosiwonId ? 'PUT' : 'POST',
            headers: fetchHeader,
            body: JSON.stringify({
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
                nanbangType: 'C',
                uploadedBy: userId,
                createdBy: userId,
                location: [0, 0]
            })
        })

        if (uploadResult.ok) {
            const {_id} = await uploadResult.json()

            if (files && files.length > 0) {
                await Promise.all(Array.from(files).map(async (file, index) => {
                    let formData = new FormData();
                    formData.append('categoryName', 'kosiwons')
                    formData.append('dirName', _id)
                    formData.append('fileName', `${_id}_kosiwon_${index}`)
                    formData.append('file', file)

                    const fileTest = await fetch('http://www.kosirock.co.kr/api/upload', {
                        method: 'POST',
                        body: formData
                    })

                    if (fileTest.ok) {
                        return Promise.resolve(true)
                    } else {
                        return Promise.reject(new Error('이미지 업로드 중 오류가 발생했습니다'))
                    }
                }))

            }

            alert('수정 되었습니다')
            dispatch(routeTo(`/members/uploadcompleted/${_id}`))
        }
    } catch (e) {
        alert(e.message)
    }
}

export const logout = () => dispatch => {
    Cookies.remove('userData')
    dispatch({
        type: LOGOUT
    })
    dispatch(push('/'))
}

export const routeTo = (url) => dispatch => {
    dispatch(push(url))
}
