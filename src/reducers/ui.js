import {TOGGLE_LOGIN_POPUP, TOGGLE_WONJANG_LOGIN_POPUP} from '../data/ActionTypes'

export const isLoginPopup = (ui) => ui.loginPopup

const defaultState = {
    loginPopup: false,
    wonjangLoginPopup: false
}

const ui = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_LOGIN_POPUP:
            return {
                ...state,
                loginPopup: !state.loginPopup
            }
        case TOGGLE_WONJANG_LOGIN_POPUP:
            return {
                ...state,
                loginPopup: !state.loginPopup
            }
        default:
            return state
    }
}

export default ui
