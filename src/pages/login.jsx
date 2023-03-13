import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import {login} from "../components/servicies/actions/login-action";
import {useDispatch} from "react-redux";

const Login = () => {
    const [authDetails, setAuthDetails] = useState({
        login: '',
        password: ''

    })
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
        dispatch(login(authDetails.login, authDetails.password))
    }

    return (
        <div>
            <h4>Вход</h4>

            <form action="" onSubmit={e => onSubmit(e)}>
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
                <Button htmlType="submit" type="primary" size="large">
                    Нажми на меня
                </Button>
            </form>
            <div>
                <a href="/register"><p>Вы - новый пользователь <Button htmlType="button" type="secondary" size="small">
                    Зарегистрироваться
                </Button></p> </a>
            </div>
            <div>
                <a href="/forgot-password"><p>Вы Забыли пароль - востановите его <Button htmlType="button" type="secondary" size="small">
                    Зарегистрироваться
                </Button></p> </a>
            </div>

        </div>

    )
}

export default Login