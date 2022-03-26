import * as axios from 'axios'

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: { 'API-KEY': '11627e82-0679-4686-9095-25af6160a9d9' }
    }
)

export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
}

export const sub = (userId) => {
    return instance.post(`follow/${userId}`, {})
}

export const unSub = (userId) => {
    return instance.delete(`follow/${userId}`, {})
}



//ProfilePage

export const setProfile = (currentUser) => {
    return instance.get(`profile/${currentUser}`)
}

export const getStatusAPI = (currentUser) => {
    return instance.get(`profile/status/${currentUser}`)
}

export const updateStatusAPI = (status) => {
    return instance.put('profile/status', {status: status})
}

export const updatePhoto = (image) => {
    return instance.put('profile/photo', image, { headers: { 'Content-type': 'multipart/form-data' }})
}

//Auth

export const getAuth = () => {
    return instance.get('auth/me')
}

export const login = (email, password, rememberMe, captcha) => {
    return instance.post('auth/login', {email: email, password: password, rememberMe: rememberMe, captcha: captcha})
}

export const logout = () => {
    return instance.delete('auth/login')
}

export const getCaptcha = () => {
    return instance.get('security/get-captcha-url')
}

//Follows

export const setFollowedUsers = (totalCount) => {
    return instance.get(`users?count=${totalCount}`)
}