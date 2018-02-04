import {push} from 'react-router-redux'
import {
    TOGGLE_LOGIN_POPUP,
    TOGGLE_DELETE_POPUP,
    TOGGLE_WONJANG_LOGIN_POPUP,
    LOGIN,
    LOGOUT
} from "../data/ActionTypes";

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
                sessionStorage.setItem('userData', JSON.stringify(userData))
                dispatch(push('/'))
            } else {
                alert(result.message)
            }
        } catch (e) {
            console.log(`error: ${e}`)
        }
    }
}

export const logout = () => dispatch => {
    sessionStorage.removeItem('userData')
    dispatch({
        type: LOGOUT
    })
    dispatch(push('/'))
}

export const routeTo = (url) => dispatch => {
    console.log('hi')
    dispatch(push(url))
}
