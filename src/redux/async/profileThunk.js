import { setUser, getStatus, updateAvatar } from '../profileReducer'
import { setProfile, updatePhoto, updateStatusAPI } from '../../components/api/api'
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

export const updatePhotoThunk = (image) => async (dispatch) => {
  const formData = new FormData()
  formData.append('image', image.uploadImage[0]);
  const response = await updatePhoto(formData)
  if (response.data.resultCode === 0){
    const largeImage = response.data.data.photos.large
    const smallImage = response.data.data.photos.small
    dispatch(updateAvatar(largeImage, smallImage))
  }
}

// export const 