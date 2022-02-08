const SET_USER_DATA = 'SET-USER-DATA'

const initialState = {
    userId: null,
    email: null,
    login: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-USER-DATA' : 
        return {
            ...state,
            ...action.data
        }
        default: {
            return state;

        }
    }
}

export const setUserData = (userId, login, email, result) => {
    return { type: SET_USER_DATA, data: {userId, login, email, result}}
}

export default authReducer