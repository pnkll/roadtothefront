import classes from './Profile.module.css'
import MyPosts from './My posts/MyPosts'

function Profile(){
    return (
        <div className={classes.content}>
        <div><img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
        </div>
        <div>Ava</div>
        <MyPosts/>
      </div>
    )
}

export default Profile