import {Link} from "react-router-dom";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getUser} from "../components/servicies/actions/update-token-action";

const Profile = ()=>{

    const  dispatch = useDispatch();
    const {currentUser} = useSelector(state => ({
        currentUser: state.currentUser
    }))

    useEffect(() => {

        dispatch(getUser());

    }, []);

    const [name,setName] =useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <div>
                <ul>
                    <li><Link to={'/'}>dsfsfs</Link ></li>
                    <li><Link to={'/'}>sdfsf</Link></li>
                    <li><Link to={'/'}>sdfsfs</Link></li>
                </ul>
                <div>
                    <form action="">
                        <Input>
                            type={'text'}
                            placeholder={'Имя'}
                            onChange={e => setName(e.target.value)}
                            value={name}
                            name={'name'}
                            error={false}
                            errorText={'Ошибка'}
                            icon="EditIcon"
                        </Input>
                        <EmailInput>
                            type={'text'}
                            placeholder={'Почта'}
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            name={'name'}
                            error={false}
                            errorText={'Ошибка'}
                            icon="EditIcon"
                        </EmailInput>
                        <PasswordInput>
                            type={'text'}
                            placeholder={'Имя'}
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            name={'name'}
                            error={false}
                            errorText={'Ошибка'}
                            icon="EditIcon"
                        </PasswordInput>
                        <Button
                            onClick={onSaveCallback}
                            type="primary"
                            size="medium"
                        >
                            Сохранить
                        </Button>





                    </form>
                </div>
            </div>
        </div>

    )


}