import React, {useEffect, useState} from "react";
import styles from './modal.module.css';
import ModalOverlay from "../modal-overlay/modal-overlay";
import ReactDOM from 'react-dom';
import {useDispatch, useSelector} from "react-redux";
import {selectorModal, selectorModalIngredients} from "../servicies/reducers/selectors";
import {closeOrderModal} from "../servicies/actions/order-actions";
import {closePopUp} from "../servicies/actions/ingredient-modal-action";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useLocation} from "react-router-dom";

const Modal = ({onClose,...props}) => {
    const modalOrder = useSelector(selectorModal)
    const modalIngredients=useSelector(selectorModalIngredients)
    const [domIsReady,setDomIsReady] =useState(false);
    const dispatch =useDispatch();
    const location =useLocation();
    const close =()=>{
        if (modalOrder){
        dispatch(
            closeOrderModal()
        )}else{
            onClose()
        }
    }

    console.log('background',location)
    useEffect(() => {
        setDomIsReady(true)
        const handleEsc = (event) => {
            if (event.keyCode === 27 || modalOrder === false) {
               onClose()
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };

    }, []);

    return domIsReady ?
        ReactDOM.createPortal(
        <> <ModalOverlay handler={close}/>
            <div className={styles.centerContainer}>
                <div className={styles.modal}>

                    <div className={styles.modalTop}>
                        <h1 className="text text_type_main-large">Детали ингридиента</h1>
                        <span ><CloseIcon type="primary" onClick={close} /></span>
                    </div>
                    {props.children}

                </div>
            </div>

        </>,
        document.getElementById("portal")
    ):null
}
export default Modal
