const SET_FOLLOWS = 'SET-FOLLOWS'

const initialState = {
    friends: []
}

const followsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-FOLLOWS':
            return {
                ...state, friends: action.users
            }
        default:
            return state
    }
}

export const setFollows = (users) => ({ type: SET_FOLLOWS, users })

export default followsReducer