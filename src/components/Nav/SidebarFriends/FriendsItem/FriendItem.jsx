import classes from './FriendItem.module.css'
import {NavLink} from 'react-router-dom'

function FriendItem(props) {
    return (
        <div className={classes.friend}>
            <NavLink to={`profile/${props.users.path}`}>
            <img src={props.users.avatar} />
            {props.users.name}
            </NavLink>
        </div>
    )
}

export default FriendItem