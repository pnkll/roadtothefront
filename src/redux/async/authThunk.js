import { getAuth } from "../../components/api/api"
import { setUserData } from "../authReducer"

export const checkAuth = () => (dispatch) => {
    getAuth()
      .then(response => {
        const login = response.data.data.login
        const email = response.data.data.email
        const userId = response.data.data.id
        const result = response.data.resultCode
        if ( result === 0){
        dispatch(setUserData(userId, login, email))
        }
      })
}