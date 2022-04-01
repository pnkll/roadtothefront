import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Paginator from "../common/Paginator/Paginator";
import { getUsersThunk } from "../../redux/async/usersThunk";
import { getCurrentPage, getFetching, getTotalUsersCount, getPageSize, getUsers } from "../../redux/selectors/users-selectors";
import User from './User'
import classes from './Users.module.css'
import { Outlet } from "react-router-dom";

let Users = (props) => {

    const dispatch = useDispatch()
    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const users = useSelector(getUsers)
    const isFetching = useSelector(getFetching)

    useEffect(() => {
        if (users.length === 0) {
            dispatch(getUsersThunk(currentPage, pageSize))
        }
    }, [])

    return (

        <div className={classes.mainWrapper}>Users 
        <div className={classes.content}><div>{
            users.map(u => <User key={u.id} id={u.id} photos={u.photos} followed={u.followed} status={u.status} name={u.name} />
            )

        }</div></div>
            <div className={classes.pages}><Paginator
                isFetching={isFetching}
                pageSize={pageSize}
                totalItemsCount={totalUsersCount}
                currentPage={currentPage}
                portionSize={5} /></div>
        </div>
    )
}

export default Users