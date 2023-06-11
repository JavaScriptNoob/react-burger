import {Link} from "react-router-dom";
import {Input, Button, PasswordInput, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {ChangeEvent, FormEvent, useRef, useState} from "react";

import {register} from "../components/servicies/actions/register-action";
import styles from "./register.module.css"
import {useDispatch} from "../components/servicies/customHooks/typeHooks";

const Register = () => {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState({
        firstInput: '',
        secondInput: '',
        thirdInput: ''
    })

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        console.log(inputData)
        setInputData({
            ...inputData,
            [e.target.name]: value
        });
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(register(
            inputData.firstInput,
            inputData.secondInput,
            inputData.thirdInput))
    }
    return (
        <div className={styles.container}>
            <p className="text text_type_main-medium">Register</p>
            <form action="" onSubmit={e => onSubmit(e)}
                  className={styles.formContainer}>
                <Input
                    type={'text'}
                    placeholder={'Логин'}
                    onChange={e => handleChange(e)}
                    icon={'CurrencyIcon'}
                    value={inputData.firstInput}
                    name={'firstInput'}
                    error={false}
                    errorText={'Ошибка'}
                    size={'default'}

                />
                <EmailInput
                    onChange={e => handleChange(e)}
                    value={inputData.secondInput}
                    name={'secondInput'}
                    placeholder="Почта"

                />
                <PasswordInput
                    onChange={e => handleChange(e)}
                    value={inputData.thirdInput}
                    name={'thirdInput'}

                />
                <Button
                    htmlType="submit"
                    type="primary"
                    size="large">
                    Нажми на меня
                </Button>

            </form>
            <div>

                <Link to="/login">
                    <p>Вы Уже Зарегистрированнны?</p>
                    <Button
                        htmlType="button"
                        type="secondary"
                        size="large"> Войти
                    </Button>
                </Link>
            </div>
        </div>

    )
}

export default Register
