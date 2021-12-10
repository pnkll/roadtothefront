const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

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
      newPostText: 'put it'
}

const profileReducer = (state = initialState, action) => {


    if (action.type === 'ADD-POST') {
        let newPost = {
            id: 3, message: state.newPostText, likesCount: '0', avatar: 'https://proprikol.ru/wp-content/uploads/2020/11/kartinki-patrika-17.jpg'
        }
        state.posts.push(newPost)
        state.newPostText = ''
        return state;
    }

    else if (action.type === 'UPDATE-POST-TEXT') {
        state.newPostText = action.newText
        return state;
    }
    else{
        return state;
    }
}

export const addPostActionCreator = () => {
    return { type: ADD_POST }
}

export const updatePostTextActionCreator = (text) => {
    return { type: UPDATE_POST_TEXT, newText: text }
}

export default profileReducer