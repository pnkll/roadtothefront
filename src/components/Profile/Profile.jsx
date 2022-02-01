import classes from './Profile.module.css'
import MyPostsContainer from './My posts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { setUser } from '../../redux/profileReducer'
import { useEffect, useReducer } from 'react'
import * as axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
// import Post from './My posts/Post/Post'

function Profile(props) {
  
  const profile = useSelector(setUser)

  const dispatch = useDispatch()

  const onSetUSer = (profile) => {
    dispatch(setUser(profile))

  }

  useEffect(()=>{
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
              dispatch(setUser(response.data))
                console.log(response.data)
            })
    
  },[])

  

  if (props.profile != null) {
    return (

      <div className={classes.content}>
        <ProfileInfo user={props.profile} />
        <MyPostsContainer store={props.store} />
      </div>
    )
  }
  else {return <div>Continues...</div>}
}

export default Profile