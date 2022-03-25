import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getfollowsThunk } from '../../../redux/async/followsThunk'
import { getFriends } from '../../../redux/selectors/follows-selectors'
import { getUsers } from '../../../redux/selectors/users-selectors'
import Preloader from '../../common/Preloader/Preloader'
import FriendItem from './FriendsItem/FriendItem'
import classes from './SidebarFriends.module.css'

const SidebarFriends = React.memo( props => {

    const dispatch = useDispatch()
    const friends = useSelector(getFriends)
    const users = useSelector(getUsers)
    
    useEffect(()=>{
      dispatch(getfollowsThunk(70))
    },[users])

    
    if (friends.length != 0){
    return (
        <div className={classes.friends}>
            Friends
        <div className={classes.container}>
            {friends.slice(0,6).map( u => <FriendItem key={u.id} users={u}/>)}            
        </div>
        </div>
    )
        }
        else return <Preloader/>
})

export default SidebarFriends