
export const getUsers = (state) => {
    return state.usersPage.users
}

export const getPageCount = (state) => {
    return state.usersPage.pageCount
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getFetching = (state) => {
    return state.usersPage.isFetching
}

export const getButtonState = (state) => {
    return state.usersPage.button
}