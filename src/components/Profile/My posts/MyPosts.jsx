import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts(props) {
    let newPostElem = React.createRef();
    let postElems = props.posts.map(p => (<Post message={p.message} likesCount={p.likesCount} avatar={p.avatar} />));

    let addPost = () => {
        let text = newPostElem.current.value;
        props.addPost(text)
    }

    return (
        <div className={classes.posts}>
            My posts
            <div><textarea ref={newPostElem}></textarea></div>
            <button onClick={addPost}>Add post</button>
            {postElems}
        </div>
    )
}

export default MyPosts