export const getIsLoggedIn = (user) => user.isLoggedIn

export const getIsWonjang = user => user.isWonjang

const defaultState = {
    isLoggedIn: false,
    isWonjang: false
}

const user = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default user