import classes from './ProfileInfo.module.css'

function ProfileInfo(props) {
    return (
        <div>
            <div><img src={props.picture}/>
            </div>
            <div className={classes.ava}><img src={props.avatar}/></div>
        </div>
    )
}

export default ProfileInfo