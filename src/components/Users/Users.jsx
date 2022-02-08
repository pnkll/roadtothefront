import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import classes from './Users.module.css'
import { setPage, toogleIsFetching, setUsers, follow, unfollow } from '../../redux/usersReducer'
import Preloader from "../default/Preloader/Preloader";
import { getUsers, sub, unSub } from '../api/api'

let Users = (props) => {

    const dispatch = useDispatch()
    const pageCount = useSelector(state => state.usersPage.pageCount)
    const pageSize = useSelector(state => state.usersPage.pageSize)
    const currentPage = useSelector(state => state.usersPage.currentPage)
    const users = useSelector(state => state.usersPage.users)
    const isFetching = useSelector(state => state.usersPage.isFetching)


    const onSetPage = (pageNum) => {
        dispatch(setPage(pageNum))
        dispatch(toogleIsFetching(true))
        getUsers(pageNum, pageSize)
            .then(response => {
                dispatch(setUsers(response.data.items))
                dispatch(toogleIsFetching(false))
            })
    }

    useEffect(() => {
        if (users.length === 0) {
            toogleIsFetching(true);
            getUsers(currentPage, pageSize)
                .then(response => {
                    dispatch(setUsers(response.data.items))
                    dispatch(toogleIsFetching(false))
                })
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
                                    unSub(u.id)
                                        .then(response => {
                                            if (response.data.resultCode == 0) {

                                                dispatch(unfollow(u.id))
                                            }
                                        })

                                }}>unfollow</button>
                                : <button className={classes.followed} onClick={() => {
                                    sub(u.id).then(response => {
                                        if (response.data.resultCode == 0) {
                                            dispatch(follow(u.id))
                                        }
                                    })
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
                        {(e) => { onSetPage(p) }} className={currentPage === p
                            ? classes.selectedPage
                            : classes.page}>{p}</span>
                })}
            </div>

        </div>
    )
}

export default Users