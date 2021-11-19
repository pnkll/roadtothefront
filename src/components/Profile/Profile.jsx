import classes from './Profile.module.css'
import MyPosts from './My posts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Post from './My posts/Post/Post'

function Profile(props) {
  return (
    <div className={classes.content}>
      <ProfileInfo picture={props.profiles.background} avatar={props.profiles[0].avatar} />
      <MyPosts posts={props.posts}/>
    </div>
  )
}

export default Profile