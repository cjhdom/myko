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
        default:
            return state
    }
}

export default user