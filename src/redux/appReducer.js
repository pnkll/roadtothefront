const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'
 
const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default: {
            return state;

        }
    }
}

export const initializeSuccess = () => {
    return { type: INITIALIZED_SUCCESS }
}


export default appReducer