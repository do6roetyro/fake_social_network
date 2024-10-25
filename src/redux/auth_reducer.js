const SET_AUTH_DATA = 'SET-AUTH-DATA'
const SET_AUTH_STATUS = 'SET-AUTH-STATUS'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                id: action.id,
                email: action.email,
                login: action.login
            }
        }
        case SET_AUTH_STATUS: {
            return {
                ...state,
                isAuth: action.isAuth
            }
        }

        default: return state
    }
}

export const setAuthData = ({ id, email, login }) => ({ type: SET_AUTH_DATA, id, email, login })
export const setAuthStatus = (isAuth) => ({ type: SET_AUTH_STATUS, isAuth })


export default authReducer

