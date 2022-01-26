import classes from './Profile.module.css'
import MyPostsContainer from './My posts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { produceWithPatches } from 'immer';
// import Post from './My posts/Post/Post'

function Profile(props) {
  let state = props.store.getState();
  console.log(props);
  return (
    
    <div className={classes.content}>
      <div>Hello {props.response}</div>
      <ProfileInfo id={props.user.id} profilePage={state.profilePage} fullname={props.fullname}/>
      <MyPostsContainer store={props.store}/>
    </div>
  )
}

export default Profile