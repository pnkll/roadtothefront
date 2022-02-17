import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from './Users.module.css'
import { follow, unfollow, toogleOfButton } from '../../redux/usersReducer'
import Preloader from "../default/Preloader/Preloader";
import { sub, unSub } from '../api/api'
import { followThunk, getUsersThunk, onSetPageThunk, unFollowThunk } from "../../redux/async/usersThunk";

let Users = (props) => {

    const dispatch = useDispatch()
    const pageCount = useSelector(state => state.usersPage.pageCount)
    const pageSize = useSelector(state => state.usersPage.pageSize)
    const currentPage = useSelector(state => state.usersPage.currentPage)
    const users = useSelector(state => state.usersPage.users)
    const isFetching = useSelector(state => state.usersPage.isFetching)
    const button = useSelector(state => state.usersPage.button)

    useEffect(() => {
        if (users.length === 0) {
            dispatch(getUsersThunk(currentPage, pageSize))
        }
    }, [])

    let header = 'Users'
    let but = <button>show more</button>
    let pages = []

    for (let i = 1; i <= Math.ceil(pageCount / pageSize); i++) {
        pages.push(i)
    }

    return (

        <div>{header} {
            users.map(u => (
                <div key={u.id} className={classes.users}>
                    <div className={classes.user}>
                        <NavLink to={`../profile/${u.id}`}><img src={u.photos.small != null
                            ? u.photos.small
                            : "https://cdn1.ozone.ru/s3/multimedia-a/c1200/6064056070.jpg"} /></NavLink><br />
                        <div>
                            {u.followed
                                ? <button className={classes.followed} onClick={() => {
                                    dispatch(unFollowThunk(u.id))

                                }}>unfollow</button>
                                : <button disabled = {button} className={classes.followed} onClick={() => {
                                    dispatch(followThunk(u.id))
                                }}>follow</button>}
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
                <div>{isFetching ? <Preloader /> : null}</div>
                {pages.map(p => {
                    return <span onClick=
                        {(e) => { dispatch(onSetPageThunk(p, pageSize)) }} className={currentPage === p
                            ? classes.selectedPage
                            : classes.page}>{p}</span>
                })}
            </div>

        </div>
    )
}

export default Users