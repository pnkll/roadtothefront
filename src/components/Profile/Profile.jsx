import classes from './Profile.module.css'
import MyPostsContainer from './My posts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { produceWithPatches } from 'immer';
// import Post from './My posts/Post/Post'

function Profile(props) {
  if (props.profilePage.user != null) {
    return (

      <div className={classes.content}>
        <ProfileInfo user={props.profilePage.user} />
        <MyPostsContainer store={props.store} />
      </div>
    )
  }
  else {return <div>Continues...</div>}
}

export default Profile