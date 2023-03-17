import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useEffect, useState} from "react";
import {login} from "../components/servicies/actions/login-action";
import {useDispatch, useSelector} from "react-redux";
import styles from './login.module.css'
import {useNavigate} from "react-router-dom";
const Login = () => {
    const [authDetails, setAuthDetails] = useState({
        login: '',
        password: ''

    })
    const loginSucess = useSelector(state => state.user.loginSuccess)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const value = e.target.value;
        console.log(authDetails)
        setAuthDetails({
            ...authDetails,
            [e.target.name]: value
        });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(login(authDetails.login, authDetails.password));   }


    if (loginSucess){
        navigate('/profile')
    }



    return (
        <div className={styles.container}>
            <p className="text text_type_main-medium">Вход</p>

            <form action="" onSubmit={e => onSubmit(e)} className={styles.form}>
                <EmailInput
                    onChange={e => handleChange(e)}
                    value={authDetails.login}
                    name={'login'}
                    placeholder="Логин"
                    isIcon={false}
                    extraClass="mb-2"
                />
                <PasswordInput
                    onChange={e => handleChange(e)}
                    value={authDetails.password}
                    name={'password'}
                    extraClass="mb-2"
                />
                <Button style={{width:'200px'}} htmlType="submit" type="primary" size="large">
                    Войти
                </Button>
            </form>
            <div>
                <a href="/register"><p>Вы - новый пользователь <Button htmlType="button" type="secondary" size="small">
                    Зарегистрироваться
                </Button></p> </a>
            </div>
            <div>
                <a href="/forgot-password"><p>Вы Забыли пароль - востановите его <Button htmlType="button" type="secondary" size="small">
                    Востановить пароль
                </Button></p> </a>
            </div>

        </div>

    )
}

export default Login