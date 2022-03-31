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
    { key: 1, userid: 'me', image: null, message: 'First message on this dialog', time: '14:00' },
    { key: 2, image: 'https://cdn1.ozone.ru/s3/multimedia-a/c1200/6064056070.jpg', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, culpa!', time: '14:00' },
    { key: 3, image: 'https://cdn1.ozone.ru/s3/multimedia-a/c1200/6064056070.jpg', message: 'Lorem ipsum dolor sit amet consectetur adipisic.', time: '14:00' },
    { key: 4, userid: 'me', image: null, message: 'Lorem ipsumnisi, ipsa architecto id exercitationem.', time: '14:00' },
    { key: 5, image: 'https://cdn1.ozone.ru/s3/multimedia-a/c1200/6064056070.jpg', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam dolore velit rerum soluta deserunt nisi.', time: '14:00' }
  ],
  // newMessageValue: ''
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-MESSAGE': {
      return {
        ...state,
        messages: [...state.messages, { key: '', userid: 'me', message: action.message, image: 'https://www.seekpng.com/png/detail/59-593478_mr-krabs-mr-krabs-png.png', time: action.time }],
      }
    }
    default:
      return state;
  }
}

export const addMessageActionCreator = (message, time) => {
  return { type: ADD_MESSAGE, message, time }
}

export const updateMessageActionCreator = (text) => {
  return { type: UPDATE_MESSAGE_TEXT, newText: text }
}

export default dialogsReducer