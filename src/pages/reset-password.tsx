import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {reset} from "../components/servicies/actions/reset-password-action";
import {useNavigate} from "react-router-dom";
import {selectorUser} from "../components/servicies/reducers/selectors";
import styles from "./reset-password.module.css"
import {useAppDispatch} from "../components/servicies/customHooks/typeHooks";

const ResetPassword = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [resetDetails, setResetDetails] = useState({
        newPassword: '', token: ''
    })
    const forgotRequest = useSelector(selectorUser)
    const resetStatus = useSelector(selectorUser)
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setResetDetails({
            ...resetDetails, [e.target.name]: value
        });
    }
    useEffect(() => {
        if (!forgotRequest.forgotPasswordSuccess) {
            navigate('/forgot-password')
        }
    }, []);


    const onSubmit = (e:FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        dispatch(reset(resetDetails.newPassword, resetDetails.token));
    }
    if (resetStatus.resetSuccess) {
        navigate('/login')
    }
    return (<div className={styles.container}>
        <h4>Обновите пароль</h4>
        <form action="" onSubmit={e => onSubmit(e)}>
            <PasswordInput
                onChange={e => handleChange(e)}
                value={resetDetails.newPassword}
                name={'newPassword'}
                placeholder="Введите новый пароль"

                extraClass="mb-5"
            />
            <Input
                onChange={e => handleChange(e)}
                value={resetDetails.token}
                name={'token'}
                extraClass="mb-2"
                placeholder="Введите пароль из письма"
            />
            {resetStatus.resetFailed && <p className={styles.alert}>Вы допустили ошибку </p> }
            <div className={styles.buttonContainer}>
                <Button htmlType="submit" type="primary" size="large">
                    Нажми на меня
                </Button>

            </div>
        </form>

    </div>)
}

export default ResetPassword;
