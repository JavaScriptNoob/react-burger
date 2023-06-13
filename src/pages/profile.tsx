import {Link, useNavigate} from "react-router-dom";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from "react-redux";
import {FC, MouseEvent, SyntheticEvent, useEffect, useState} from "react";
import {getUser} from "../components/servicies/actions/update-token-action";
import {changeUserDetails} from "../components/servicies/actions/update-user-details-action";
import styles from "./profile.module.css"
import {exit} from "../components/servicies/actions/sign-out-action";

import {selectorUser} from "../components/servicies/reducers/selectors";
import {useForm} from "../components/servicies/customHooks/useForm";
import {useDispatch} from "../components/servicies/customHooks/typeHooks";
import {useLocation} from "../components/utils/types";
import MyOrdersHistory from "../components/my-orders-history/my-orders-history";

const Profile:FC = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const currentUser = useSelector(selectorUser)
    const {values, handleChange, setValues} = useForm({
        name: '', email: '', password: ''
    })
    const navigate = useNavigate();
    const conditionStatement = values.name !== currentUser.name || values.email !== currentUser.email || values.password !== '';
    useEffect(() => {


        dispatch(getUser());
        console.log(values)

    }, []);

    useEffect(() => {
        setValues({
            ...values, name: currentUser.name, email: currentUser.email,


        })
    }, [currentUser])
    const submitChanges = (e: SyntheticEvent) => {
        e.preventDefault();
        dispatch(changeUserDetails(values));
    }
    const clear = () => {
        setValues({
            name: currentUser.name, email: currentUser.email, password: ''
        });

    }


    const signOut = () => {
        dispatch(exit())
    }
    return (<div>
            <div className={styles.container}>
                <ul className={styles.sideNav}>
                    <li
                        className="text text_type_main-medium">
                        <Link
                            className="text text_type_main-medium"
                            to={'/profile'}>
                            Профиль
                        </Link>
                    </li>
                    <li
                        className="text text_type_main-medium">
                        <Link
                            className="text text_type_main-medium"
                            to={'/profile/orders'}>
                            История заказов
                        </Link>
                    </li>
                    <li
                        className="text text_type_main-medium">
                        <Link
                            onClick={signOut}
                            className="text text_type_main-medium"
                            to={'/'}>
                            Выход
                        </Link>
                    </li>
                </ul>
                {location.pathname === '/profile' && <div className={styles.formContainer}>
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

                            placeholder={'Почта'}
                            onChange={handleChange}
                            value={values.email}
                            name={'email'}>




                        </EmailInput>
                        <PasswordInput

                            placeholder={'Пароль'}
                            onChange={handleChange}
                            value={values.password}
                            name={'password'}


                            icon="EditIcon">
                        </PasswordInput>
                        <div className={styles.buttonContainer}>
                            <div>
                                <Button
                                    onClick={clear}
                                    type="primary"
                                    size="medium"
                                    htmlType={"submit"}
                                    disabled={!conditionStatement}

                                >
                                    Отмена
                                </Button>
                            </div>
                            <div>
                                <Button
                                    onClick={submitChanges}
                                    type="primary"
                                    size="medium"
                                    htmlType={"submit"}
                                    disabled={!conditionStatement}
                                >
                                    Сохранить
                                </Button>

                            </div>

                        </div>
                    </form>
                </div>}{location.pathname === '/profile/orders' && <MyOrdersHistory />}
               </div>

        </div>

    )


}
export default Profile
