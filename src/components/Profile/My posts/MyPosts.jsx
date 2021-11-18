import classes from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts(props) {

    let postElems = props.posts.map(p => (<Post message={p.message} likesCount={p.likesCount} avatar={p.avatar} />));

    return (
        <div className={classes.posts}>
            My posts
            <div><textarea></textarea></div>
            <button>Add post</button>
            {postElems}
        </div>
    )
}

export default MyPosts