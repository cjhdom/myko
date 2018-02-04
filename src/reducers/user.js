import {
    LOGIN
} from '../data/ActionTypes'

export const getIsLoggedIn = (user) => user.isLoggedIn

export const getIsWonjang = user => user.isWonjang

export const getUserData = user => user.userData

const defaultState = {
    isLoggedIn: false,
    isWonjang: false,
    userData: {}
}

const user = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                userData: action.userData
            }
        default:
            return state
    }
}

export default user