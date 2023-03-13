import {Link} from "react-router-dom";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getUser} from "../components/servicies/actions/update-token-action";
import {changeUserDetails} from "../components/servicies/actions/update-user-details-action";

const Profile = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => (state.user))

    useEffect(() => {
        console.log(currentUser)
        dispatch(getUser());
    });


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitChanges = (e) => {
        e.preventDefault();
        console.log(53, e, name, email, password)
        dispatch(changeUserDetails(name, email, password));
    }
    return (
        <div>
            <div>
                <ul>
                    <li><Link to={'/'}>dsfsfs</Link></li>
                    <li><Link to={'/'}>sdfsf</Link></li>
                    <li><Link to={'/'}>sdfsfs</Link></li>
                </ul>
                <div>
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
                            placeholder={'Имя'}
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            name={'password'}
                            error={false}
                            errorText={'Ошибка'}
                            icon="EditIcon">
                        </PasswordInput>
                        <Button
                            onClick={submitChanges}
                            type="primary"
                            size="medium"
                            htmlType={"submit"}
                        >
                            Сохранить
                        </Button>
                    </form>
                </div>
            </div>
        </div>

    )


}
export default Profile