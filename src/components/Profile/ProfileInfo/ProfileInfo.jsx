import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getStatus } from '../../../redux/async/profileThunk'
import classes from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'
import ProfileStatusHOC from './ProfileStatusHOC'

function ProfileInfo(props) {

const dispatch = useDispatch()

    useEffect(()=>{
        // dispatch(getStatus(props.profilePage.user.userId))
    },[])

    return (
        <div>
            <div className={classes.ava}><img src={props.profilePage.user.photos.large != null
                ? props.profilePage.user.photos.large
                : 'https://cdn1.ozone.ru/s3/multimedia-a/c1200/6064056070.jpg'} /></div>
            <div className={classes.fullname}>{props.profilePage.user.fullName}</div>
            <div>Status: <ProfileStatus profilePage={props.profilePage}/></div>
            <div>Socials: <a href={`https://${props.profilePage.user.contacts.github}`}>GitHub</a></div>

        </div>
    )
}

export default ProfileInfo