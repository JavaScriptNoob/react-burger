import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {forgotPassword} from "../components/servicies/actions/forgot-password-action";
import styles from "./forgot-password.module.css"
import {selectorUser} from "../components/servicies/reducers/selectors";
const ForgotPassword = () => {

    const dispatch =  useDispatch();
    const [forgotten,setForgotten] = useState('');
    const success = useSelector( selectorUser ).forgotPasswordSuccess
    let navigate = useNavigate();
    const onSubmit = (e) =>{
        e.preventDefault();
        dispatch(forgotPassword(forgotten))

    }


    useEffect(() => {
        if (success){
            return navigate("/reset-password");
        }
    },[success]);
    console.log(forgotten)
    return (
        <div className={styles.container}>

            <form action="" className={styles.formContainer} onSubmit={e => onSubmit(e)}>
                <p  className="text text_type_main-medium">Востановление пароля </p>
                <EmailInput
                    onChange={e => setForgotten(e.target.value)}
                    value={forgotten}
                    name={'secondInput'}
                    placeholder="Укажите ваш почтовый ящик"
                    extraClass="mb-2"
                />
                <div className={styles.buttonContainer}>
                <Button htmlType="submit" type="primary" size="large">
                    Отправить
                </Button>
                </div>

            </form>
            <div >

                <Link to="/login">
                    <span>Вспомнили пароль?</span> <Button htmlType="button" type="secondary" size="small">
                    Войти
                    </Button>
                </Link>
            </div>
        </div>

    )
}

export default ForgotPassword;