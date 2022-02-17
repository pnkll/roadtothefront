const SET_USER_DATA = 'SET-USER-DATA'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-USER-DATA' : 
        return {
            ...state,
            ...action.data,
            isAuth: true
        }
        default: {
            return state;

        }
    }
}

export const setUserData = (userId, login, email) => {
    return { type: SET_USER_DATA, data: {userId, login, email}}
}

export default authReducer