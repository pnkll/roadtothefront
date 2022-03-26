import { getAuth, getCaptcha, login, logout } from "../../components/api/api"
import { authError, setCaptcha, setUserData } from "../authReducer"

export const checkAuth = () => (dispatch) => {
  return getAuth()
    .then(response => {
      const login = response.data.data.login
      const email = response.data.data.email
      const userId = response.data.data.id
      const result = response.data.resultCode
      if (result === 0) {
        dispatch(setUserData(userId, login, email, true, null))
      }
    })
}

export const loginThunk = (values) => (dispatch) => {
  login(values.email, values.password, values.rememberMe, values.captchaText)
    .then(response => {
      if (response.data.resultCode === 0) {
        // dispatch(setUserData(response.data.data.userId, 'painkill', values.email))
        dispatch(checkAuth())
      }
      else if (response.data.resultCode === 10) {
        dispatch(authError(response.data.messages[0]))
        getCaptcha()
          .then(response => {
            dispatch(setCaptcha(response.data.url))
          })
      }
      else {
        dispatch(authError(response.data.messages[0]))
      }
    })
}

export const logoutThunk = () => (dispatch) => {
  logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
      }
    }
    )
}
