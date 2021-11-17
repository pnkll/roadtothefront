import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {

    let posts = [
        { message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', likesCount: '13', avatar: 'https://all-t-shirts.ru/goods_images/ru110593II000eed5c5dc8999b359b5e0e6cd786bae4b.jpg' },
        { message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, tempore culpa eos fuga reprehenderit modi facere ipsum! Deleniti, odit magni?', likesCount: '27', avatar: 'https://deti-online.com/img/spanchbob-color.jpg' }
    ]

    let postElems = posts.map(p => (<Post message={p.message} likesCount={p.likesCount} avatar={p.avatar} />));
    console.log(postElems)

    return (
        <div className={classes.posts}>
            My posts
            <div><textarea></textarea></div>
            <button>Add post</button>
            {postElems[1]}
            {postElems[0]}
        </div>
    )
}

export default MyPosts