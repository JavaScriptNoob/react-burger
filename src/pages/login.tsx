import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {ChangeEvent, FormEvent,   useState} from "react";
import {login} from "../components/servicies/actions/login-action";
import {useSelector} from "../components/servicies/customHooks/typeHooks";
import styles from './login.module.css'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "../components/servicies/customHooks/typeHooks";
const Login = () => {
    const [authDetails, setAuthDetails] = useState({
        login: '',
        password: ''

    })
    const [submit, setSubmit] = useState(false)

    const loginSuccess = useSelector((state:any )=> state.user.loginSuccess)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setAuthDetails({
            ...authDetails,
            [e.target.name]: value
        });
    }
    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmit(true)
        dispatch(login(authDetails.login, authDetails.password));}
    if (loginSuccess){
        navigate('/')
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
                {!loginSuccess && submit ?<p className={styles.alert}>Все пошло не по плану</p>:null}
            </form>
            <div>
                <a href="/register.tsx"><p>Вы - новый пользователь <Button htmlType="button" type="secondary" size="small">
                    Зарегистрироваться
                </Button></p> </a>
            </div>
            <div>
                <a href="/forgot-password.tsx"><p>Вы Забыли пароль - востановите его <Button htmlType="button" type="secondary" size="small">
                    Востановить пароль
                </Button></p> </a>
            </div>

        </div>

    )
}

export default Login
