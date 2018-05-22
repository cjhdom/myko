import {
    TOGGLE_LOGIN_POPUP,
    TOGGLE_WONJANG_LOGIN_POPUP,
    TOGGLE_DELETE_POPUP
} from '../data/ActionTypes'

export const isLoginPopup = ui => ui.loginPopup

export const isDeletePopup = ui => ui.deletePopup

export const getWonjangLoginPopup = ui => ui.wonjangLoginPopup

const defaultState = {
    loginPopup: false,
    wonjangLoginPopup: false,
    deletePopup: false
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
                wonjangLoginPopup: !state.wonjangLoginPopup,
            }
        case TOGGLE_DELETE_POPUP:
            return {
                ...state,
                deletePopup: !state.deletePopup
            }
        default:
            return state
    }
}

export default ui
