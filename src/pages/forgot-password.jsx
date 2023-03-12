import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {forgotPassword} from "../components/servicies/actions/forgot-password-action";

const ForgotPassword = () => {

    const dispatch =  useDispatch();
    const [forgotten,setForgotten] = useState('');
    const onSubmit = (e) =>{
        e.preventDefault();
        dispatch(forgotPassword(forgotten))
    }
    console.log(forgotten)
    return (
        <div>
            <form action="" onSubmit={e => onSubmit(e)}>

                <EmailInput
                    onChange={e => setForgotten(e.target.value)}
                    value={forgotten}
                    name={'secondInput'}
                    placeholder="Почта"

                    extraClass="mb-2"
                />

                <Button htmlType="submit" type="primary" size="large">
                    Нажми на меня
                </Button>

            </form>
            <div>
                <p>Вы Уже Зарегистрированнны?</p>
                <Link to="/login">
                    Войти
                </Link>
            </div>
        </div>

    )
}

export default ForgotPassword;