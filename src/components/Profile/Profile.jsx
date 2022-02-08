import classes from './Profile.module.css'
import MyPosts from './My posts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { setUser } from '../../redux/profileReducer'
import { useEffect, useReducer } from 'react'
import { useLocation, useParams } from 'react-router'
import * as axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { current } from 'immer'
// import Post from './My posts/Post/Post'

function Profile(props) {
  const dispatch = useDispatch()

  const profilePage = useSelector(state => state.profilePage)
  const profile = useSelector(state => state.profilePage.user)
  

  const onSetUSer = (profile) =>{
    dispatch(setUser(profile))
  }

  const params = useParams()
  const currentUser = params.id  

  useEffect(()=>{
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${currentUser}`)
              .then(response => {
                onSetUSer(response.data)
              })
  },[])

  if (profile != null) {

    return (

      <div className={classes.content}>
        <ProfileInfo user={profile} />
        <MyPosts profilePage={profilePage} />
      </div>
    )
  }
  else {return <div>Continues...</div>}
}

export default Profile