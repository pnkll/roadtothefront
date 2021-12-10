const initialState = {
    users: [
      { path: '001', id: 1, name: 'Sponge Bob', avatar: 'https://deti-online.com/img/spanchbob-color.jpg' },
      { path: '002', id: 2, name: 'Pat Rick', avatar: 'https://proprikol.ru/wp-content/uploads/2020/11/kartinki-patrika-17.jpg' },
      { path: '003', id: 3, name: 'Krusty Krab', avatar: 'https://www.seekpng.com/png/detail/59-593478_mr-krabs-mr-krabs-png.png' },
      { path: '003', id: 3, name: 'Krusty Krab', avatar: 'https://www.seekpng.com/png/detail/59-593478_mr-krabs-mr-krabs-png.png' }
    ]
  }

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer