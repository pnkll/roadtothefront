import classes from './Profile.module.css'
import MyPostsContainer from './My posts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
// import Post from './My posts/Post/Post'

function Profile(props) {
  let state = props.store.getState();
  return (
    <div className={classes.content}>
      <ProfileInfo id={props.user.id} profilePage={state.profilePage} />
      <MyPostsContainer store={props.store}/>
    </div>
  )
}

export default Profile