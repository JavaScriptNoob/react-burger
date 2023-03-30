import React, {FC, SyntheticEvent, useEffect, useState} from "react";
import styles from './modal.module.css';
import ModalOverlay from "../modal-overlay/modal-overlay";
import ReactDOM from 'react-dom';
import {useDispatch, useSelector} from "react-redux";
import {selectorModal, selectorModalIngredients} from "../servicies/reducers/selectors";
import {closeOrderModal} from "../servicies/actions/order-actions";
import {closePopUp} from "../servicies/actions/ingredient-modal-action";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useLocation} from "react-router-dom";
import {IModal} from "../utils/types";
import { Dispatch,AnyAction } from 'redux';
import {useAppDispatch} from "../servicies/customHooks/typeHooks";


const Modal:FC<IModal> = ({onClose,...props}) => {
    const modalOrder = useSelector(selectorModal)
    const modalIngredients=useSelector(selectorModalIngredients)
    const [domIsReady,setDomIsReady] =useState(false);
    const dispatch =useAppDispatch();
    const location =useLocation();
    const close =()=>{
        if (modalOrder){
        dispatch(
            closeOrderModal()
        )}else{
            if (onClose) {
                onClose()
            }
        }
    }
    console.log(props,onClose)

    console.log('background',location)
    useEffect(() => {
        setDomIsReady(true)
        const handleEsc = (event:KeyboardEvent) => {
            if (event.key === "Escape"|| modalOrder === false) {
                if (onClose) {
                    onClose()
                }
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };

    }, []);
    const portalElement = document.getElementById("portal");
    return domIsReady ?
        ReactDOM.createPortal(
        <div> <ModalOverlay handler={close}/>
            <div className={styles.centerContainer}>
                <div className={styles.modal}>

                    <div className={styles.modalTop}>
                        <h1 className="text text_type_main-large">Детали ингридиента</h1>
                        <span ><CloseIcon type="primary" onClick={close} /></span>
                    </div>
                    {props.children}

                </div>
            </div>

        </div>,
            document.getElementById("portal") || document.createElement("div")
    ):null
}
export default Modal
