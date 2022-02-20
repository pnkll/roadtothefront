import { NavLink } from 'react-router-dom'
import classes from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

function ProfileInfo(props) {
    return (
        <div>
            {/* <div className={classes.ava}><img src={props.user.photos.large != null
                ? props.user.photos.large
                : 'https://cdn1.ozone.ru/s3/multimedia-a/c1200/6064056070.jpg'} /></div>
            <div className={classes.fullname}>{props.user.fullName}</div> */}
            <div>Status: <ProfileStatus /></div>
            {/* <div>Socials: <a href={`https://${props.user.contacts.github}`}>GitHub</a></div> */}

        </div>
    )
}

export default ProfileInfo