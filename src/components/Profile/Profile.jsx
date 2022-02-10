import classes from './Profile.module.css'
import MyPosts from './My posts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { setUser, clear } from '../../redux/profileReducer'
import { useEffect, useReducer } from 'react'
import { useLocation, useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { setProfile } from '../../components/api/api'
import Preloader from '../default/Preloader/Preloader'

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
              setProfile(currentUser).then(response => {
                onSetUSer(response.data)
              })

              return () => {dispatch(clear())}
  },[])

  if (profile != null) {

    return (

      <div className={classes.content}>
        <ProfileInfo user={profile} />
        <MyPosts profilePage={profilePage} />
      </div>
    )
  }
  else {return <Preloader/>}
}

export default Profile