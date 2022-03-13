import classes from './Profile.module.css'
import MyPosts from './My posts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { clear } from '../../redux/profileReducer'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import Preloader from '../default/Preloader/Preloader'
import { getProfile, getStatusThunk } from '../../redux/async/profileThunk'

function Profile(props) {
  const dispatch = useDispatch()
  const params = useParams()
  const currentUser = params.id

  useEffect(() => {
    dispatch(getProfile(currentUser))
    dispatch(getStatusThunk(currentUser))
    return () => { dispatch(clear()) }
  }, [])

  if (props.profilePage.user != null && props.profilePage.status != null) {

    return (

      <div className={classes.content}>
        <ProfileInfo profilePage={props.profilePage} />
        <MyPosts profilePage={props.profilePage} />
      </div>
    )
  }
  else { return <Preloader /> }
}

export default Profile