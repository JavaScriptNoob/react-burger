import {Link} from "react-router-dom";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getUser} from "../components/servicies/actions/update-token-action";
import {changeUserDetails} from "../components/servicies/actions/update-user-details-action";
import styles from "./profile.module.css"
import {exit} from "../components/servicies/actions/sign-out-action";
const Profile = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => (state.user))

    useEffect(() => {

        dispatch(getUser());
        console.log(currentUser,78678, localStorage.getItem('refresh'))
    },[]);


    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [password, setPassword] = useState('');
    const submitChanges = (e) => {
        e.preventDefault();
        console.log(53, e, name, email, password)
        dispatch(changeUserDetails(name, email, password));
    }
    const signOut = () => {
       dispatch(exit())



    }
    return (
        <div >
            <div className={styles.container}>
                <ul className={styles.sideNav}>
                    <li><Link className="text text_type_main-medium" to={'/'}>Профиль</Link></li>
                    <li><Link className="text text_type_main-medium" to={'/'}>История заказов</Link></li>
                    <li><Link onClick={signOut} className="text text_type_main-medium" to={'/'}>Выход</Link></li>
                </ul>
                <div className={styles.formContainer}>
                    <form action="">
                        <Input
                            type={'text'}
                            placeholder={'Имя'}
                            onChange={e => setName(e.target.value)}
                            value={name}
                            name={'name'}
                            error={false}
                            errorText={'Ошибка'}
                            icon="EditIcon"
                        >

                        </Input>
                        <EmailInput
                            type={'text'}
                            placeholder={'Почта'}
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            name={'email'}
                            error={false}
                            errorText={'Ошибка'}
                            icon="EditIcon">

                        </EmailInput>
                        <PasswordInput
                            type={'text'}
                            placeholder={'Пароль'}
                            onChange={e => setPassword(e.target.value)}
                            value={password}
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
                        >
                            Сохранить
                        </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )


}
export default Profile