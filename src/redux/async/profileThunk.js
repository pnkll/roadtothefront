import { setUser, getStatus, updateAvatar, updateProfileAC } from '../profileReducer'
import { setProfile, updatePhoto, updateProfile, updateStatusAPI } from '../../components/api/api'
import { getStatusAPI } from '../../components/api/api'


export const getProfile = (currentUser) => (dispatch) => {

  setProfile(currentUser).then(response => {
    dispatch(setUser(response.data))
  })
}

export const getStatusThunk = (currentUser) => (dispatch) => {
  getStatusAPI(currentUser).then(response => {
    let status = response.data
    if (response.data === null) {
      status = 'without status :('
    }
    dispatch(getStatus(status))
  })
}

export const updateStatusThunk = (status) => (dispatch) => {
  updateStatusAPI(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(getStatus(status))
    }
  })
}

export const updatePhotoThunk = (image) => async (dispatch) => {
  const formData = new FormData()
  formData.append('image', image);
  const response = await updatePhoto(formData)
  if (response.data.resultCode === 0) {
    const largeImage = response.data.data.photos.large
    const smallImage = response.data.data.photos.small
    dispatch(updateAvatar(largeImage, smallImage))
  }
}

export const updateProfileData = (data) => async (dispatch) => {

  const obj = {
    userId: data.userId,
    lookingForAJob: data.lookingForAJob,
    lookingForAJobDescription: data.lookingForAJobDescription,
    fullName: data.fullName,
    aboutMe: data.aboutMe,
    contacts: {
      
      
      facebook: data.facebook,
      website: data.website,
      vk: data.vk,
      twitter: data.twitter,
      instagram: data.instagram,      
      youtube: data.youtube,
      github: data.github,
      mainlink: data.mainlink
    }
  }

  // console.log(obj)

  const response = await updateProfile(obj)
  if (response.data.resultCode === 0){
    dispatch(updateProfileAC(obj))
  }
}

// export const 