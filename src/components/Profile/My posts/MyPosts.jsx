import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {

    // let pictures = {
    //     picture1: "https://all-t-shirts.ru/goods_images/ru110593II000eed5c5dc8999b359b5e0e6cd786bae4b.jpg",

    //     picture2: "https://deti-online.com/img/spanchbob-color.jpg"
    // }

    // let postsData = [
    //     {message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', likesCount : '13', avatar : 'https://all-t-shirts.ru/goods_images/ru110593II000eed5c5dc8999b359b5e0e6cd786bae4b.jpg'},
    //     {message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, tempore culpa eos fuga reprehenderit modi facere ipsum! Deleniti, odit magni?', likesCount : '27', avatar : 'https://deti-online.com/img/spanchbob-color.jpg'}
    // ]


    return (
        <div className={classes.posts}>
            My posts
            <div><textarea></textarea></div>
            <button>Add post</button>
            {/* <Post likesCount={postsData.likeCount} avatar={postsData.avata} message={postsData.message}/> */}
            {/* <Post likeCount="311" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, tempore culpa eos fuga reprehenderit modi facere ipsum! Deleniti, odit magni?" picture={pictures.picture2} /> */}
            <Post id='0' />
            <Post id='1' />
        </div>
    )
}

export default MyPosts