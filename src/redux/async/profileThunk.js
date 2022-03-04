import { setUser, getStatus } from '../profileReducer'
import { setProfile } from '../../components/api/api'
import { getStatusAPI } from '../../components/api/api'


export const getProfile = (currentUser) => (dispatch) => {

    setProfile(currentUser).then(response => {
        dispatch(setUser(response.data))
      })
}

export const getStatusThunk = (currentUser) => (dispatch) => {
  getStatusAPI(currentUser).then(response => {
    dispatch(getStatus(response.data))
  })
}