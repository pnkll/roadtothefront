const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER = 'SET-USER'
const CLEAR_PROFILE_PAGE = 'CLEAR-PROFILE-PAGE'
const GET_STATUS = 'GET-STATUS'

const initialState = {
    posts: [
        { id: 1, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', likesCount: '13', avatar: 'https://yt3.ggpht.com/ytc/AKedOLR2ToVUrFKMgbZiOAtOZvObNAy_9tpiRzm_5tLX=s900-c-k-c0x00ffffff-no-rj' },
        { id: 2, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, tempore culpa eos fuga reprehenderit modi facere ipsum! Deleniti, odit magni?', likesCount: '27', avatar: 'https://deti-online.com/img/spanchbob-color.jpg' }
    ],
    profiles: [
        { background: 'https://phonoteka.org/uploads/posts/2021-05/1621015512_14-phonoteka_org-p-fon-dlya-akvariuma-bikini-bottom-26.jpg', avatar: 'https://www.seekpng.com/png/detail/59-593478_mr-krabs-mr-krabs-png.png' },
        { background: 'https://vignette.wikia.nocookie.net/spongebob/images/c/c0/Squid_Noir_001.png/revision/latest?cb=20171110155649', avatar: 'https://all-t-shirts.ru/goods_images/ru110593II000eed5c5dc8999b359b5e0e6cd786bae4b.jpg' },
        { background: 'https://i.imgflip.com/vu74f.jpg', avatar: 'https://deti-online.com/img/spanchbob-color.jpg' }
    ],
    newPostText: 'put it',
    user: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 3, message: state.newPostText, likesCount: '0', avatar: 'https://proprikol.ru/wp-content/uploads/2020/11/kartinki-patrika-17.jpg'
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''

            }
        case 'UPDATE-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
        case 'SET-USER':
            return {
                ...state, user: action.profile
            }
        case 'CLEAR-PROFILE-PAGE':
            return {
                ...state, user: null, status: null
            }
        case 'GET-STATUS':
            return {
                ...state, status: action.status
            }
        default:
            return state;
    }
}

export const addPost = () => {
    return { type: ADD_POST }
}

export const updatePostText = (text) => {
    return { type: UPDATE_POST_TEXT, newText: text }
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


export default profileReducer