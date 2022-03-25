import React from 'react'
import classes from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

function ProfileInfo(props) {

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