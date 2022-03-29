import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginThunk } from "../../redux/async/authThunk"
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import classes from './Login.module.css'
import { authClear } from "../../redux/authReducer"
import { getAuth, getCaptchaUrl, getErrorMessage, getUserId } from "../../redux/selectors/auth-selectors"

const Login = (props) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const isAuth = useSelector(getAuth)
    const userId = useSelector(getUserId)
    const errorMessage = useSelector(getErrorMessage)
    const captcha = useSelector(getCaptchaUrl)


    const [localState, setState] = useState({ messages: null })

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

    const clearMessageAboutError = () => {
        if (errorMessage != null) {
            dispatch(authClear())
        }
    }

    return (<>
        {isAuth
            ? navigate(`../profile/${userId}`)
            : <div><h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>E-mail:<br />
                        <input onClick={clearMessageAboutError} type='email' {...register('email',
                            {
                                required: 'Поле обязательное к заполнению',
                                minLength: { value: 5, message: 'Минимум 5 символов' }
                            })} />
                        {errors?.email && <div className={classes.error}>{errors?.email?.message || 'Общая ошибка'}</div>}
                    </label><br />
                    <label>password:<br />
                        <input onClick={clearMessageAboutError} type='password' {...register('password',
                            {
                                required: 'Заполните поле пароля',
                                minLength: { value: 6, message: 'Длина пароля минимум 6 символов' }
                            })} />
                        {errors?.password && <div className={classes.error}>{errors?.password?.message}</div>}
                    </label>
                    <br /><input type='checkbox' {...register('rememberMe')} />Remember me?
                    <br />{captcha != null && <><img className={classes.captchaImage} src={captcha} />
                        <br /><div>Введите символы с картинки</div>
                        <input type='text' {...register('captchaText',{
                            required: 'Введите символы с картинки'})} />
                        {errors?.captchaText && <div className={classes.error}>{errors?.captchaText?.message}</div>}</>}

                    {errorMessage != null ? <div>{errorMessage}</div> : <></>}

                    <br /><input type='submit' disabled={!isValid} />
                </form></div>}

    </>
    )
}

export default Login