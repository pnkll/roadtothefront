import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts(props) {
    let newPostElem = React.createRef();
    let postElems = props.posts.map(p => (<Post message={p.message} likesCount={p.likesCount} avatar={p.avatar} />));

    let addPost = () => {
        let text = newPostElem.current.value;
        props.addPost(text);
        newPostElem.current.value = ''
    }

    let updatePostText = ()=> {
        let newText = newPostElem.current.value;
        props.updatePostText(newText);
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
