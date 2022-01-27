import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Users.module.css'

let Users = (props) => {
    let header = 'Users'
    let but = <button>show more</button>
    let pages = []

    for (let i = 1; i <= Math.ceil(props.pageCount / props.pageSize); i++) {
        pages.push(i)
    }

    return (    
        <div>{header} {
           props.users.map(u => (
                <div key={u.id} className={classes.users}>
                    <div className={classes.user}>
                    <NavLink to={'profile/2'}><img src={u.photos.small != null
                            ? u.photos.small
                            : "https://cdn1.ozone.ru/s3/multimedia-a/c1200/6064056070.jpg"} /></NavLink><br />
                        <div>
                            {u.followed
                                ? <button className={classes.followed} onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                                : <button className={classes.followed} onClick={() => { props.follow(u.id) }}>follow</button>}
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
                            <div>{"Atlantic ocean"}</div>
                            <div>{"Bikini Bottom"}</div>
                        </div>
                    </div>
                </div>))
                
        }
            {/* {but} */}
            <div className={classes.btns}>
            <div>{props.isFetching ? <img src='https://klawood.com.ua/images/default/uploads.gif' /> : null}</div>
                {pages.map(p => {
                    return <span onClick=
                        {(e) => { props.onSetPage(p) }} className={props.currentPage === p
                            ? classes.selectedPage
                            : classes.page}>{p}</span>
                })}
                </div>

        </div>
    )
}

export default Users