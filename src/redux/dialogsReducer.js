const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const initialState = {
    dialogs: [
      { id: 1, name: 'Jeka', image: 'https://www.seekpng.com/png/detail/59-593478_mr-krabs-mr-krabs-png.png' },
      { id: 2, name: 'Pasha', image: 'https://deti-online.com/img/spanchbob-color.jpg' },
      { id: 3, name: 'name3', image: 'https://proprikol.ru/wp-content/uploads/2020/11/kartinki-patrika-17.jpg' },
      { id: 4, name: 'name4', image: 'https://avatars.mds.yandex.net/get-zen_doc/1584893/pub_5e938aee2df22c6338f58187_5e9392261fba7924e8ffee20/scale_1200' }
    ],
    messages: [
      { userid: 'me', image: 'https://www.seekpng.com/png/detail/59-593478_mr-krabs-mr-krabs-png.png', message: 'First message on this dialog' },
      { image: 'https://deti-online.com/img/spanchbob-color.jpg', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa!' },
      { image: 'https://deti-online.com/img/spanchbob-color.jpg', message: 'Lorem ipsum dolor sit amet consectetur adipisic.' },
      { userid: 'me', image: 'https://www.seekpng.com/png/detail/59-593478_mr-krabs-mr-krabs-png.png', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam dolore velit rerum soluta deserunt nisi, ipsa architecto id exercitationem.' },
      { image: 'https://deti-online.com/img/spanchbob-color.jpg', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam dolore velit rerum soluta deserunt nisi.' }
    ],
    newMessageValue: 'Message area'
  }

const dialogsReducer = (state = initialState, action) => {
    if (action.type === 'ADD-MESSAGE') {
        let text = state.newMessageValue
        state.messages.push({ userid: 'me', message: text, image: 'https://www.seekpng.com/png/detail/59-593478_mr-krabs-mr-krabs-png.png' })
        state.newMessageValue = ''
        return state;
    }

    else if (action.type === 'UPDATE-MESSAGE-TEXT') {
        state.newMessageValue = action.newText;
        return state;

    }
    else { return state }
}

export const addMessageActionCreator = () => {
    return { type: ADD_MESSAGE }
}

export const updateMessageActionCreator = (text) => {
    return { type: UPDATE_MESSAGE_TEXT, newText: text }
}

export default dialogsReducer