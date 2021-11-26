// import { rerenderEntireTree } from '../render';

let rerenderEntireTree = () => {
 
}

let state = {
  profilePage: {
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
  },
  dialogsPage: {
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
    newMessageValue: 'Mes area'
  },
  newsPage: {

  },
  musicPage: {

  },
  settingsPage: {

  },
  sidebar: {
    users: [
      { path: '001', id: 1, name: 'Sponge Bob', avatar: 'https://deti-online.com/img/spanchbob-color.jpg' },
      { path: '002', id: 2, name: 'Pat Rick', avatar: 'https://proprikol.ru/wp-content/uploads/2020/11/kartinki-patrika-17.jpg' },
      { path: '003', id: 3, name: 'Krusty Krab', avatar: 'https://www.seekpng.com/png/detail/59-593478_mr-krabs-mr-krabs-png.png' }
    ]
  }

}

export let addPost = () => {
  let newPost = {
    id: 3, message: state.profilePage.newPostText, likesCount: '0', avatar: 'https://proprikol.ru/wp-content/uploads/2020/11/kartinki-patrika-17.jpg'
  }

  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}

export let updatePostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree()
}

export const addMessage = () => {
  let newMessage = {
    userid: 'me',
    image: 'https://www.seekpng.com/png/detail/59-593478_mr-krabs-mr-krabs-png.png',
    message: state.dialogsPage.newMessageValue
  }
  state.dialogsPage.messages.push(newMessage)
  state.dialogsPage.newMessageValue = ''
  rerenderEntireTree()
  // subscribe()
}

export const updateMessageText = (newText) => {
  state.dialogsPage.newMessageValue = newText;
  rerenderEntireTree()
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state