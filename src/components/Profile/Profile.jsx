import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './My posts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { clear, setOwner } from '../../redux/profileReducer'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../common/Preloader/Preloader'
import { getProfile, getStatusThunk } from '../../redux/async/profileThunk'
import { getStatus, getUser } from '../../redux/selectors/profile-selectors'
import { getPhoto, getUserId } from '../../redux/selectors/auth-selectors'
import { savePhoto } from '../../redux/authReducer'



function Profile(props) {
  const dispatch = useDispatch()
  const params = useParams()
  const currentUser = params.id
  const user = useSelector(getUser)
  const status = useSelector(getStatus)
  const authId = useSelector(getUserId)
  const photo = useSelector(getPhoto)

  useEffect(() => {
    dispatch(getProfile(currentUser))
    dispatch(getStatusThunk(currentUser))
    if (currentUser == authId){
      dispatch(setOwner(true))
    }
    else {dispatch(setOwner(false))}
    return () => { dispatch(clear()) }
  }, [currentUser])


  if (user != null && status != null) {

    return (

      <div className={classes.content}>
        <ProfileInfo userId={currentUser}/>
        <MyPosts />
      </div>
    )
  }
  else { return <Preloader /> }
}

export default Profile