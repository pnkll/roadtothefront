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
    { key: 1, muserid: 'me', image: 'https://www.seekpng.com/png/detail/59-593478_mr-krabs-mr-krabs-png.png', message: 'First message on this dialog' },
    { key: 2, image: 'https://deti-online.com/img/spanchbob-color.jpg', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa!' },
    { key: 3, image: 'https://deti-online.com/img/spanchbob-color.jpg', message: 'Lorem ipsum dolor sit amet consectetur adipisic.' },
    { key: 4, userid: 'me', image: 'https://www.seekpng.com/png/detail/59-593478_mr-krabs-mr-krabs-png.png', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam dolore velit rerum soluta deserunt nisi, ipsa architecto id exercitationem.' },
    { key: 5, image: 'https://deti-online.com/img/spanchbob-color.jpg', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam dolore velit rerum soluta deserunt nisi.' }
  ],
  // newMessageValue: ''
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-MESSAGE': {
      return {
        ...state,
        messages: [...state.messages, { key: '', userid: 'me', message: action.message, image: 'https://www.seekpng.com/png/detail/59-593478_mr-krabs-mr-krabs-png.png' }],
      }
    }
    default:
      return state;
  }
}

export const addMessageActionCreator = (message) => {
  return { type: ADD_MESSAGE, message }
}

export const updateMessageActionCreator = (text) => {
  return { type: UPDATE_MESSAGE_TEXT, newText: text }
}

export default dialogsReducer