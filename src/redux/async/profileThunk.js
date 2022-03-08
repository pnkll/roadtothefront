import { setUser, getStatus } from '../profileReducer'
import { setProfile, updateStatusAPI } from '../../components/api/api'
import { getStatusAPI } from '../../components/api/api'


export const getProfile = (currentUser) => (dispatch) => {

    setProfile(currentUser).then(response => {
        dispatch(setUser(response.data))
      })
}

export const getStatusThunk = (currentUser) => (dispatch) => {
  getStatusAPI(currentUser).then(response => {
    let status = response.data
    if (response.data === null){
      status = 'without status :('
    }
    dispatch(getStatus(status))
  })
}

export const updateStatusThunk = (status) => (dispatch) => {
  updateStatusAPI(status).then(response => {
    if (response.data.resultCode === 0){
      dispatch(getStatus(status))
    }
  })
}

// export const 