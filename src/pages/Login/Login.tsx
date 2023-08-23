import React, {useState} from 'react';
import {Navigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setAuthData} from "../../store/thunk/appActionCreators";
import {LoginPasswordType} from "../../store/types";
import styles from "./Login.module.css"


export const Login = () => {
    const dispatch = useAppDispatch()
    const isAuthenticated = useAppSelector(state => state.app.isAuth)

    const isLoginError = useAppSelector(state => state.app.loginError)

    const [formData, setFormData] = useState<LoginPasswordType>({
        login: '',
        password: ''
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(setAuthData(formData))
    }

    const onFormChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.currentTarget.name]: e.currentTarget.value})
    }

    if (isAuthenticated) {
        return <Navigate to={'/profile'}/>
    } else {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                    <input className={styles.inputField} type="text" name="login" value={formData.login} onChange={onFormChangeHandler}/>
                    <input className={styles.inputField} type="password" name="password" value={formData.password} onChange={onFormChangeHandler}/>
                    <button className={styles.submitButton} type="submit">Login</button>
                </form>
                {isLoginError && <div className={styles.errorField}>
                    Имя пользователя или пароль введены не верно
                </div>}
            </div>
        );
    }
};
