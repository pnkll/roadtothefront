import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Paginator from "../common/Paginator/Paginator";
import { getUsersThunk } from "../../redux/async/usersThunk";
import { getCurrentPage, getFetching, getTotalUsersCount, getPageSize, getUsers } from "../../redux/selectors/users-selectors";
import User from './User'
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

        <div>Users {
            users.map(u => <User key={u.id} id={u.id} photos={u.photos} followed={u.followed} status={u.status} name={u.name} />
            )

        }
            <Paginator
                isFetching={isFetching}
                pageSize={pageSize}
                totalItemsCount={totalUsersCount}
                currentPage={currentPage}
                portionSize={5} />
                <Outlet/>
        </div>
    )
}

export default Users