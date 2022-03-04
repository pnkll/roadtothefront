import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getStatus } from "../../../redux/async/profileThunk"
import ProfileStatus from "./ProfileStatus"

const ProfileStatusHOC = (props) => {
    // useEffect(()=>{
    //     getStatus(props.userId)
    // },[])
    // debugger
    // const status = useSelector(state => state.profilePage.status)
    console.log(props.profilePage.status)

    return <ProfileStatus status={props.profilePage.status}/>
}

export default ProfileStatusHOC