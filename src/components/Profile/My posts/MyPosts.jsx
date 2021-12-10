import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts(props) {

    console.log(props.addPost)
    // debugger;
    let newPostElem = React.createRef();
    let postElems = props.posts.map(p => (<Post message={p.message} likesCount={p.likesCount} avatar={p.avatar} />));

    let onAddPost = () => {
        props.addPost()
    }

    let onUpdatePostText = () => {
        let newText = newPostElem.current.value;
        props.updatePostText(newText) 
    }

    return (
        <div className={classes.posts}>
            My posts
            <div><textarea onChange={onUpdatePostText} ref={newPostElem} value={props.newPostText} /></div>
            <button onClick={onAddPost}>Add post</button>
            {postElems}
        </div>
    )
}

export default MyPosts
