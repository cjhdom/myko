import {TOGGLE_LOGIN_POPUP} from "../data/ActionTypes";

export const toggleLoginPopup = () => ({
    type: TOGGLE_LOGIN_POPUP
})

export const toggleWonjangPopup = () => ({
    type: TOGGLE_WONJANG_LOGIN_POPUP
})

const loginCheck = isLoggedIn => dispatch => {
    if (!isLoggedIn) {
        dispatch(toggleLoginPopup())
    }
}