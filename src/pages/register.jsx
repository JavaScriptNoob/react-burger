
import {Link} from "react-router-dom";
import {Input, Button, PasswordInput, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {register} from "../components/servicies/actions/register-action";

const Register =()=>{
    const inputRef=useRef();
    const dispatch = useDispatch();
    const [inputData,setInputData]= useState({
        firstInput:'',
        secondInput:'',
        thirdInput:''
    })

    const handleChange = (e)=>{
        const value = e.target.value;
       console.log( inputData)
        setInputData({
            ...inputData,
            [e.target.name]: value
        });
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        dispatch(register(inputData.firstInput,inputData.secondInput,inputData.thirdInput))
    }
    return(
        <div>
            <p>Register</p>
            <form action="" onSubmit={e=>onSubmit(e)}>
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
                    extraClass="ml-1"
                />
                <EmailInput
                    onChange={e =>handleChange(e)}
                    value={inputData.secondInput}
                    name={'secondInput'}
                    placeholder="Почта"

                    extraClass="mb-2"
                />
                <PasswordInput
                    onChange={e =>handleChange(e)}
                    value={inputData.thirdInput}
                    name={'thirdInput'}
                    extraClass="mb-2"
                />
                <Button htmlType="submit" type="primary" size="large">
                    Нажми на меня
                </Button>

            </form>
            <div>
                <p>Вы Уже Зарегистрированнны?</p>
                <Link to="/login" >
                        Войти
                </Link>
            </div>
        </div>

    )
 }

 export default Register