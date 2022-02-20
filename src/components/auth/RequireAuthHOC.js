import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

const RequireAuth = (props) => {

    
    const navigate = useNavigate()
    const isAuth = useSelector(state => state.auth.isAuth)

    useEffect(()=>{
        if (!isAuth) { navigate('/login')}
    },[])

    return props.children
}

export default RequireAuth

//Переадресация в случае если пользователь не авторизован