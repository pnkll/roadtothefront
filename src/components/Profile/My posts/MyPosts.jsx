import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePostText, addPost } from '../../../redux/profileReducer';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts(props) {

    let newPostElem = React.createRef();
    let postElems = props.profilePage.posts.map(p => (<Post key={p.id} message={p.message} likesCount={p.likesCount} avatar={p.avatar} />));

    const dispatch = useDispatch()

    const onUpdatePostText = () => {
        let newText = newPostElem.current.value;
        dispatch(updatePostText(newText))
    }

    const onAddPost = () => {
        dispatch(addPost())
    }

    return (
        <div className={classes.posts}>
            My posts
            <div><textarea onChange={onUpdatePostText} ref={newPostElem} value={props.profilePage.newPostText} /></div>
            <button onClick={onAddPost}>Add post</button>
            {postElems}
        </div>
    )
}

export default MyPosts
