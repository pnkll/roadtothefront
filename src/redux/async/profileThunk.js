import { setUser } from '../profileReducer'
import { setProfile } from '../../components/api/api'


export const getProfile = (currentUser) => (dispatch) => {

    setProfile(currentUser).then(response => {
        dispatch(setUser(response.data))
      })
}