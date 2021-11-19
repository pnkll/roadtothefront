import FriendItem from './FriendsItem/FriendItem'
import classes from './SidebarFriends.module.css'

function SidebarFriends(props) {

    return (
        <div className={classes.friends}>
            Friends
        <div className={classes.container}>
            
            {/* <div className={classes.friend}>
                <img src={props.users[0].avatar} />
                {props.users[0].name}
            </div>
            <div className={classes.friend}>
                <img src={props.users[0].avatar} />
                {props.users[0].name}
            </div>
            <div className={classes.friend}>
                <img src={props.users[0].avatar} />
                {props.users[0].name}
            </div> */}

            <FriendItem users={props.users[0]}/>
            <FriendItem users={props.users[1]}/>
            <FriendItem users={props.users[2]}/>
            <FriendItem users={props.users[1]}/>
            
        </div>
        </div>
    )
}

export default SidebarFriends