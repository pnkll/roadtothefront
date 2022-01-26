import classes from './ProfileInfo.module.css'

function ProfileInfo(props) {
    // let id = props.sidebar.users[2].id
    let id = props.id
    return (
        <div>
            <div><img src={props.profilePage.background}/>
            </div>
            <div className={classes.ava}><img src={props.profilePage.profiles[id].avatar}/></div>
            <div className={classes.fullname}>{props.fullname}</div>
        </div>
    )
}

export default ProfileInfo