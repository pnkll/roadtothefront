const SET_USER_DATA = 'SET-USER-DATA'
const AUTH_ERROR = 'AUTH-ERROR'
const CLEAR_AUTH_ERROR = 'CLEAR-AUTH-ERROR'
const SET_CAPTCHA_URL = 'SET-CAPTCHA-URL'
const SAVE_PHOTO = 'SAVE-PHOTO'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    errors: null,
    captchaUrl: null,
    photoURL: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                errors: null
            }
        case 'AUTH-ERROR':
            return {
                ...state,
                errors: action.message
            }
        case 'CLEAR-AUTH-ERROR':
            return {
                ...state,
                errors: null
            }
        case 'SET-CAPTCHA-URL':
            return {
                ...state,
                captchaUrl: action.url
            }
        default: {
            return state;

        }
    }
}

export const setUserData = (userId, login, email, isAuth, captchaUrl, photoURL) => {
    return { type: SET_USER_DATA, data: { userId, login, email, isAuth, captchaUrl, photoURL } }
}

export const authError = (message) => {
    return { type: AUTH_ERROR, message }
}

export const authClear = () => {
    return { type: CLEAR_AUTH_ERROR }
}

export const setCaptcha = (url) => {
    return { type: SET_CAPTCHA_URL, url }
}

export default authReducer