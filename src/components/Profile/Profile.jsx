import classes from './Profile.module.css'
import MyPosts from './My posts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { clear } from '../../redux/profileReducer'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import Preloader from '../default/Preloader/Preloader'
import { getProfile } from '../../redux/async/profileThunk'

function Profile(props) {
  const dispatch = useDispatch()

  const profilePage = useSelector(state => state.profilePage)
  const profile = useSelector(state => state.profilePage.user)
  const params = useParams()
  const currentUser = params.id

  useEffect(() => {
    dispatch(getProfile(currentUser))
    return () => { dispatch(clear()) }
  }, [])

  if (profile != null) {

    return (

      <div className={classes.content}>
        <ProfileInfo user={profile} />
        <MyPosts profilePage={profilePage} />
      </div>
    )
  }
  else { return <Preloader /> }
}

export default Profile