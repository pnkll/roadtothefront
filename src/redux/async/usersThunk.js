import { getUsers, sub, unSub } from "../../components/api/api";
import { toogleIsFetching, setUsers, setPage, follow, unfollow, toogleOfButton } from "../reducers/usersReducer";



export const getUsersThunk = (currentPage, pageSize) => (dispatch) => {
    toogleIsFetching(true);
    getUsers(currentPage, pageSize)
        .then(response => {
            dispatch(setUsers(response.data.items))
            dispatch(toogleIsFetching(false))
        })
}

export const onSetPageThunk = (pageNum, pageSize) => (dispatch) => {
    dispatch(setPage(pageNum))
    dispatch(toogleIsFetching(true))
    getUsers(pageNum, pageSize)
        .then(response => {
            dispatch(setUsers(response.data.items))
            dispatch(toogleIsFetching(false))
        })
}

export const followThunk = (userId) => (dispatch) => {
    sub(userId).then(response => {
        if (response.data.resultCode == 0) {
            dispatch(follow(userId))
        }
        dispatch(toogleOfButton(false))
    })
}

export const unFollowThunk = (userId) => (dispatch) => {
    unSub(userId)
        .then(response => {
            if (response.data.resultCode == 0) {
                dispatch(unfollow(userId))
            }
        })
}