import React from "react"
import { useDispatch } from "react-redux"
import { loginThunk } from "../../redux/async/authThunk"
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import classes from './Login.module.css'

const Login = (props) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [localState, setState] = useState({messages: null})

    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset //очистка формы после отправки данных
    } = useForm({ mode: 'onBlur' })

    const onSubmit = (data) => {
        dispatch(loginThunk(data))
        reset()
    }

    return (<>
        {props.state.auth.isAuth
            ? navigate(`../profile/${props.state.auth.userId}`)
            : <div><h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>E-mail:<br />
                        <input type='email' {...register('email',
                            {
                                required: 'Поле обязательное к заполнению',
                                minLength: { value: 5, message: 'Минимум 5 символов' }
                            })} />
                        {errors?.email && <div className={classes.error}>{errors?.email?.message || 'Общая ошибка'}</div>}
                    </label><br />
                    <label>password:<br />
                        <input type='password' {...register('password',
                            {
                                required: 'Заполните поле пароля',
                                minLength: { value: 6, message: 'Длина пароля минимум 6 символов' }
                            })} />
                        {errors?.password && <div className={classes.error}>{errors?.password?.message}</div>}
                    </label>
                    <br /><input type='checkbox' {...register('rememberMe')} />Remember me?
                    {props.state.auth.errors != null ? <div>{props.state.auth.errors}</div>: <></>}

                    <br /><input type='submit' disabled={!isValid} />
                </form></div>}

    </>
    )
}

export default Login