import classes from './Post.module.css'

function Post(props) {
    let postsData = [
        { message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', likesCount: '13', avatar: 'https://all-t-shirts.ru/goods_images/ru110593II000eed5c5dc8999b359b5e0e6cd786bae4b.jpg' },
        { message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, tempore culpa eos fuga reprehenderit modi facere ipsum! Deleniti, odit magni?', likesCount: '27', avatar: 'https://deti-online.com/img/spanchbob-color.jpg' }
    ]

    return (
        <div className={classes.item}>
            <img src={postsData[props.id].avatar} />
            <div className={classes.text}>{postsData[props.id].message}</div>
            <div className={classes.likes}>Liked: {postsData[props.id].likesCount}</div>
        </div>
    )
}

export default Post