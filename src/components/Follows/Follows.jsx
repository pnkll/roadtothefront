import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getfollowsThunk } from "../../redux/async/followsThunk"
import { getFriends } from "../../redux/selectors/follows-selectors"


const Follows = () => {

    const friends = useSelector(getFriends)
    const dispatch = useDispatch()

    // useEffect(()=>{
    //     dispatch(getfollowsThunk(70))
    //     console.log('change')
    // },[friends])

    return <>
    I am followed
    </>
}

export default Follows