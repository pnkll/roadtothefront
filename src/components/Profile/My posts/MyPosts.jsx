import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts(props) {
    let newPostElem = React.createRef();
    let postElems = props.posts.map(p => (<Post message={p.message} likesCount={p.likesCount} avatar={p.avatar} />));

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }

    let updatePostText = () => {
        let newText = newPostElem.current.value;
        // props.updatePostText(newText);
        props.dispatch({type: 'UPDATE-POST-TEXT', newText: newText})
    }

    return (
        <div className={classes.posts}>
            My posts
            <div><textarea onChange={updatePostText} ref={newPostElem} value={props.postText} /></div>
            <button onClick={addPost}>Add post</button>
            {postElems}
        </div>
    )
}

export default MyPosts
