import React from 'react'
import classes from './Users.module.css'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { unFollowThunk } from '../../redux/async/usersThunk'
import { followThunk } from '../../redux/async/usersThunk'

const User = ({id, photos, followed, status, name }) =>{

    const dispatch = useDispatch()

    return <>
        <div key={id} className={classes.users}>
                    <div className={classes.user}>
                        <NavLink to={`../profile/${id}`}><img src={photos.small != null
                            ? photos.small
                            : "https://cdn1.ozone.ru/s3/multimedia-a/c1200/6064056070.jpg"} /></NavLink><br />
                        <div>
                            {followed
                                ? <button className={classes.followed} onClick={() => {
                                    dispatch(unFollowThunk(id))

                                }}>unfollow</button>
                                : <button className={classes.followed} onClick={() => {
                                    dispatch(followThunk(id))
                                }}>follow</button>}
                        </div>
                    </div>

                    <div className={classes.info}>
                        <div className={classes.name}>
                            <div>{name}</div>
                            <div>{status != null
                                ? status
                                : 'Here need a status'}</div>
                        </div>
                        <div className={classes.location}>
                            <div>{"Atlantic ocean"}</div>
                            <div>{"Bikini Bottom"}</div>
                        </div>
                    </div>
                </div>
    </>
}

export default User