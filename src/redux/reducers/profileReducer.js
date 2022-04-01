const ADD_POST = 'ADD-POST'
const SET_USER = 'SET-USER'
const CLEAR_PROFILE_PAGE = 'CLEAR-PROFILE-PAGE'
const GET_STATUS = 'GET-STATUS'
const SET_OWNER = 'SET-OWNER'
const UPDATE_PHOTO = 'UPDATE-PHOTO'
const UPDATE_PROFILE = 'UPDATE-PROFILE'

const initialState = {
    posts: [
        { id: 1, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', likesCount: '13', avatar: 'https://yt3.ggpht.com/ytc/AKedOLR2ToVUrFKMgbZiOAtOZvObNAy_9tpiRzm_5tLX=s900-c-k-c0x00ffffff-no-rj' },
        { id: 2, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, tempore culpa eos fuga reprehenderit modi facere ipsum! Deleniti, odit magni?', likesCount: '27', avatar: 'https://deti-online.com/img/spanchbob-color.jpg' }
    ],
    user: null,
    status: null,
    isOwner: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 3, message: action.text, likesCount: '0', avatar: 'https://proprikol.ru/wp-content/uploads/2020/11/kartinki-patrika-17.jpg'
            }
            return {
                ...state,
                posts: [...state.posts, newPost],

            }
        case 'SET-USER':
            return {
                ...state, user: action.profile
            }
        case 'CLEAR-PROFILE-PAGE':
            return {
                ...state, user: null, status: null, isOwner: null
            }
        case 'GET-STATUS':
            return {
                ...state, status: action.status
            }
        case 'SET-OWNER':
            return {
                ...state, isOwner: action.isOwner
            }
        case 'UPDATE-PHOTO':
            return {
                ...state,
                user: { ...state.user, photos: { small: action.small, large: action.large } }
            }
        case 'UPDATE-PROFILE':
            return {
                ...state,
                user: {
                    ...state.user, 
                    aboutMe: action.user.aboutMe, 
                    lookingForAJob: action.user.lookingForAJob,
                    lookingForAJobDescription: action.user.lookingForAJobDescription,
                    fullName: action.user.fullName, 
                    contacts: action.user.contacts
                }
            }
        default:
            return state;
    }
}

export const addPost = (text) => {
    return { type: ADD_POST, text }
}

export const setUser = (profile) => {
    return { type: SET_USER, profile }
}

export const clear = () => {
    return { type: CLEAR_PROFILE_PAGE }
}

export const getStatus = (status) => {
    return { type: GET_STATUS, status }
}

export const setOwner = (isOwner) => {
    return { type: SET_OWNER, isOwner }
}

export const updateAvatar = (large, small) => {
    return { type: UPDATE_PHOTO, large, small }
}

export const updateProfileAC = (user) => {
    return { type: UPDATE_PROFILE, user}
}

export default profileReducer