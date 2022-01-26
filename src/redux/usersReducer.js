const SHOW_MORE = 'SHOW-MORE'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'
const SET_PAGE = 'SET-PAGE'
const SET_PAGE_COUNT = 'SET-PAGE-COUNT'
const TOOGLE_ISFETCHING = 'TOOGLE-ISFETCHING'

const initialState = {
    users: [],
    pageSize: 4,
    pageCount: 30,
    currentPage: 1,
    isFetching: true
}



const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return (
                            { ...u, followed: true }
                        )
                    }
                    return u;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return (
                            { ...u, followed: false }
                        )
                    }
                    return u;
                })
            }
        case 'SETUSERS':
            return {
                ...state, users: [...action.users]
            }
        case 'SHOW-MORE':
            return {
                ...state, users: [...state, ...action.users]
                // ...state, currentPage: action.currentPage
            }
        case 'SET-PAGE':
            return {
                ...state, currentPage: action.currentPage
            }
        case 'SET-PAGE-COUNT':
            return {
                ...state, pageCount: action.pageCount
            }
        case 'TOOGLE-ISFETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SETUSERS, users })
export const showMore = (number) => ({ type: SHOW_MORE, currentPage: number })
export const setPage = (pageNum) => ({ type: SET_PAGE, currentPage: pageNum })
export const setPageCount = (pageCount) => ({ type: SET_PAGE_COUNT, pageCount })
export const toogleIsFetching = (isFetching) => ({type: TOOGLE_ISFETCHING, isFetching})

export default usersReducer