import { setFollowedUsers } from "../../components/api/api"
import { setFollows } from "../followsReducer"

export const getfollowsThunk = (totalCount) => async (dispatch) =>{
    const data = await setFollowedUsers(totalCount)
    const follows = data.data.items.filter( u => u.followed === true)
    dispatch(setFollows(follows))
}