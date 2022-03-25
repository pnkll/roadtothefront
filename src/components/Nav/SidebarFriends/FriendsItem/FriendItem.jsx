import React from 'react'
import classes from './FriendItem.module.css'
import {NavLink} from 'react-router-dom'

const FriendItem = (props) => {
    return (
        <div className={classes.friend}>
            <NavLink to={`profile/${props.users.id}`}>
            <img src={props.users.photos.small != null ? props.users.photos.small : 'https://cdn1.ozone.ru/s3/multimedia-a/c1200/6064056070.jpg'} />
            {props.users.name}
            </NavLink>
        </div>
    )
}

export default FriendItem