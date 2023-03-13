import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {reset} from "../components/servicies/actions/reset-password-action";

const ResetPassword=()=>{
    const dispatch =  useDispatch();
    const [resetDetails, setResetDetails] = useState({
        newPassword: '',
        token: ''

    })




    const handleChange = (e) => {
        const value = e.target.value;
        console.log(resetDetails)
        setResetDetails({
            ...resetDetails,
            [e.target.name]: value
        });
    }
    const onSubmit =(e)=>{
        console.log('hej')
        e.preventDefault();
        dispatch(reset(resetDetails.newPassword, resetDetails.token));



}
    return (
        <div>
            <h4>Обновите пароль</h4>

            <form action="" onSubmit={e => onSubmit(e)}>
                <PasswordInput
                    onChange={e => handleChange(e)}
                    value={resetDetails.newPassword}
                    name={'newPassword'}
                    placeholder="Введите новый пароль"
                    isIcon={false}
                    extraClass="mb-2"
                />
                <Input
                    onChange={e => handleChange(e)}
                    value={resetDetails.token}
                    name={'token'}
                    extraClass="mb-2"
                    placeholder="Введите пароль из письма"
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

export default  ResetPassword;