import classes from './Post.module.css'

function Post(props){


    return (
        <div className={classes.item}>
            {/* <img src="https://all-t-shirts.ru/goods_images/ru110593II000eed5c5dc8999b359b5e0e6cd786bae4b.jpg">
            </img> */}


            <img src={props.picture}/>
            <div className={classes.text}>{props.message}</div>
        <div className={classes.likes}>Liked: {props.likeCount}</div>
        </div>
    )
}

export default Post