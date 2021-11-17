import classes from './Post.module.css'

function Post(props) {

    return (
        <div className={classes.item}>
            <img src={props.avatar} />
            <div className={classes.text}>{props.message}</div>
            <div className={classes.likes}>Liked: {props.likesCount}</div>
        </div>
    )
}

export default Post