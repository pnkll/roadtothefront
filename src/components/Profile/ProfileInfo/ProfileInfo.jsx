import React from 'react'
import { useSelector } from 'react-redux'
import { getUser } from '../../../redux/selectors/profile-selectors'
import classes from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

function ProfileInfo(props) {

    const user = useSelector(getUser)

    return (
        <div>
            <div className={classes.ava}><img src={user.photos.large != null
                ? user.photos.large
                : 'https://cdn1.ozone.ru/s3/multimedia-a/c1200/6064056070.jpg'} /></div>
            <div className={classes.fullname}>{user.fullName}</div>
            <div>Status: <ProfileStatus/></div>
            <div>Socials: <a href={`https://${user.contacts.github}`}>GitHub</a></div>

        </div>
    )
}

export default ProfileInfo