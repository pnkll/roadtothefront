import { NavLink } from 'react-router-dom'
import classes from './ProfileInfo.module.css'

function ProfileInfo(props) {
    // let id = props.sidebar.users[2].id
    let id = props.id
    console.log(props)
    return (
        <div>
            {/* <div><img src={props.profilePage.background}/>
            </div> */}
            <div className={classes.ava}><img src={props.user.photos.large}/></div>
            <div className={classes.fullname}>{props.user.fullName}</div>
            <div>Status: {props.user.aboutMe}</div>
            <div>Socials: <a href={`https://${props.user.contacts.github}`}>GitHub</a></div>

        </div>
    )
}

export default ProfileInfo