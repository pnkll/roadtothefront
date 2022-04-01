import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../../redux/reducers/profileReducer';
import { getPosts } from '../../../redux/selectors/profile-selectors';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = React.memo(props => {

    const posts = useSelector(getPosts)

    let postElems = posts.map(p => (<Post key={p.id} message={p.message} likesCount={p.likesCount} avatar={p.avatar} />));

    const dispatch = useDispatch()

    const { register, handleSubmit, reset } = useForm()

    const onAddPost = (value) => {
        if (value.text != '') {
            dispatch(addPost(value.text))
            reset()
        }
    }

    return (
        <div className={classes.posts}>
            My posts
            <form onSubmit={handleSubmit(onAddPost)}>
                <input type='text' {...register('text')} />
                <input type='submit' />

            </form>
            {postElems}
        </div>
    )
})

export default MyPosts
