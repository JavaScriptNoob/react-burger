import React, {useEffect, useState} from "react";
import styles from './modal.module.css'
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = (props) => {
    const [state, setState] = useState()
    useEffect(() => {
        setState(props.data)
    }, {state})
    const act = () => {

        console.log(state)
    }
    return (

        <div className={styles.modal}>


        </div>


    )

}
export default Modal
