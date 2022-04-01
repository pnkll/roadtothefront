import { checkAuth } from "./authThunk"
import { initializeSuccess } from "../reducers/appReducer"


export const initializeApp = () => (dispatch) => {
    let promise = dispatch(checkAuth())
    promise.then(()=>{
        dispatch(initializeSuccess())
    })
}