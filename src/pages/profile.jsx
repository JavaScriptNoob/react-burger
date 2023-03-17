import {Link, useNavigate} from "react-router-dom";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getUser} from "../components/servicies/actions/update-token-action";
import {changeUserDetails} from "../components/servicies/actions/update-user-details-action";
import styles from "./profile.module.css"
import {exit} from "../components/servicies/actions/sign-out-action";
import {refetchUser} from "../components/servicies/actions/refetch-user-action";
import {selectorUser} from "../components/servicies/reducers/selectors";

const Profile = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector(selectorUser)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate =useNavigate();
    const conditionStatement = name !==''&& email!==''&& password!=='';
    useEffect(() => {

            dispatch(refetchUser());
            dispatch(getUser());

    },[]);

    useEffect(()=> {
            setName(currentUser.name);
            setEmail(currentUser.email)
        },[currentUser]
    )
    const submitChanges = (e) => {
        e.preventDefault();
        dispatch(changeUserDetails(name,email,password));
        navigate("/")
    }


    const signOut = () => {
        dispatch(exit())
    }
    return (
        <div>
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
                                disabled={!conditionStatement}
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