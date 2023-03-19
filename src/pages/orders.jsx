import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {forgotPassword} from "../components/servicies/actions/forgot-password-action";
import styles from "./forgot-password.module.css"
const Orders = () => {




    return (
        <div className={styles.container}>

            <form action="" className={styles.formContainer} >
                <p  className="text text_type_main-medium">Востановление пароля </p>
                <h1>История заказов</h1>


            </form>

        </div>

    )
}

export default Orders;