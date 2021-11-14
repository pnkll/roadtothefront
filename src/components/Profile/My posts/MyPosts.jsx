import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {

    let pictures = {
        picture1 : "https://all-t-shirts.ru/goods_images/ru110593II000eed5c5dc8999b359b5e0e6cd786bae4b.jpg", 

        picture2: "https://deti-online.com/img/spanchbob-color.jpg"
    }
    

    return (
        <div className={classes.post}>My posts
            <textarea></textarea>
            <button>Add post</button>
            <Post likeCount="20" picture= {pictures.picture1} message="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
            <Post likeCount="311"message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, tempore culpa eos fuga reprehenderit modi facere ipsum! Deleniti, odit magni?" picture= {pictures.picture2} />
            <Post />
        </div>
    )
}

export default MyPosts