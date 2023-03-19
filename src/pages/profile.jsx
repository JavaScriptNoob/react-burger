import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getUser} from "../components/servicies/actions/update-token-action";
import {changeUserDetails} from "../components/servicies/actions/update-user-details-action";
import styles from "./profile.module.css"
import {exit} from "../components/servicies/actions/sign-out-action";
import {refetchUser} from "../components/servicies/actions/refetch-user-action";
import {selectorUser} from "../components/servicies/reducers/selectors";
import {useForm} from "../components/servicies/customHooks/useForm";

const Profile = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector(selectorUser)
    const {values, handleChange, setValues} = useForm({
        name: '',
        email: '',
        password: ''
    })
    const location = useLocation();
    const navigate = useNavigate();
    const conditionStatement = values.name !== currentUser.name || values.email !== currentUser.email || values.password !== '';
    useEffect(() => {

        dispatch(refetchUser());
        dispatch(getUser());
        console.log(values)

    }, []);

    useEffect(() => {
        setValues({
                ...values,
                name: currentUser.name,
                email: currentUser.email,


            })}, [currentUser]
        )
        const submitChanges = (e) => {
            e.preventDefault();
            dispatch(changeUserDetails(values));

        }
        const clear = () => {
            setValues({
                name: currentUser.name,
                email: currentUser.email,
                password: ''
            });

        }


        const signOut = () => {
            dispatch(exit())
        }
        return (
            <div>
                <div className={styles.container}>
                    <ul className={styles.sideNav}>
                        <li
                            className="text text_type_main-medium">
                            <NavLink
                                className={({ isActive, isPending }) =>
                                    isActive  ? "text_active" : "text_color_inactive"}
                                to={'/profile'}>
                                Профиль
                            </NavLink>
                        </li>
                        <li
                            className="text text_type_main-medium">
                            <NavLink
                                className={({ isActive, isPending }) =>
                                    isActive  ? "text_active" : "text_color_inactive"}
                                to={'/profile/order'}>
                                История заказов
                            </NavLink>
                        </li>
                        <li
                            className="text text_type_main-medium">
                            <NavLink
                                onClick={signOut}
                                className="text text_type_main-medium"
                                to={'/'}>
                                Выход
                            </NavLink>
                        </li>
                    </ul>
                    <div className={styles.formContainer}>
                        <form action="">
                            <Input
                                type={'text'}
                                placeholder={'Имя'}
                                onChange={handleChange}
                                value={values.name}
                                name={'name'}
                                error={false}
                                errorText={'Ошибка'}
                                icon="EditIcon"
                            >

                            </Input>
                            <EmailInput
                                type={'text'}
                                placeholder={'Почта'}
                                onChange={handleChange}
                                value={values.email}
                                name={'email'}
                                error={false}
                                errorText={'Ошибка'}
                                icon="EditIcon">

                            </EmailInput>
                            <PasswordInput
                                type={'text'}
                                placeholder={'Пароль'}
                                onChange={handleChange}
                                value={values.password}
                                name={'password'}
                                error={false}
                                errorText={'Ошибка'}
                                icon="EditIcon">
                            </PasswordInput>
                            <div className={styles.buttonContainer}>
                                <Button
                                    onClick={submitChanges}
                                    type="primary"
                                    size="medium"
                                    htmlType={"submit"}
                                    disabled={!conditionStatement}
                                >
                                    Сохранить
                                </Button>
                                <Button
                                    onClick={clear}
                                    type="primary"
                                    size="medium"
                                    htmlType={"submit"}
                                    disabled={!conditionStatement}
                                >
                                    Очистить
                                </Button>


                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )


    }
    export default Profile