import React from 'react'
import classes from './Users.module.css'
import * as axios from 'axios'
// import UsersContainer from './UsersContainer'

function Users(props) {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => { props.setUsers(response.data.items) })

    }



    return <div>Users{
        props.users.map(u => (
            <div key={u.id} className={classes.users}>
                <div className={classes.user}>
                    <img src={u.photos.small != null
                        ? u.photos.small
                        : "https://www.seekpng.com/png/full/356-3562377_personal-user.png"} /><br />
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>follow</button>}
                    </div>
                </div>

                <div className={classes.info}>
                    <div className={classes.name}>
                        <div>{u.name}</div>
                        <div>{u.status != null
                            ? u.status
                            : 'Here need a status'}</div>
                    </div>
                    <div className={classes.location}>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </div>
                </div>
            </div>))
    }
        <button >show more</button>
    </div>
}

export default Users