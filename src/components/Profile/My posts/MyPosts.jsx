import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch} from 'react-redux';
import { addPost } from '../../../redux/profileReducer';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts(props) {

    // let newPostElem = React.createRef();
    let postElems = props.profilePage.posts.map(p => (<Post key={p.id} message={p.message} likesCount={p.likesCount} avatar={p.avatar} />));

    const dispatch = useDispatch()

const { register, handleSubmit, reset } = useForm()

    const onAddPost = (value) => {
        dispatch(addPost(value.text))
        reset()
    }

    return (
        <div className={classes.posts}>
            My posts
            <form onSubmit={handleSubmit(onAddPost)}>
                <input type='text' {...register('text')}/>
                <input type='submit'/>

            </form>
            {postElems}
        </div>
    )
}

export default MyPosts
