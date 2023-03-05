import React, {useEffect, useState} from "react";
import styles from './modal.module.css';
import ModalOverlay from "../modal-overlay/modal-overlay";
import ReactDOM from 'react-dom';
import {useDispatch, useSelector} from "react-redux";
import {selectorModal, selectorModalIngredients} from "../servicies/reducers/selectors";
import {closeOrderModal} from "../servicies/actions/order-actions";
import {closePopUp} from "../servicies/actions/ingredient-modal-action";

const Modal = (props) => {
    const modalOrder = useSelector(selectorModal)
    const modalIngredients=useSelector(selectorModalIngredients)
    const [overlayIsOpen, setIsOpen] = useState(false);
    const dispatch =useDispatch()
    const close =()=>{
        if (modalOrder){
        dispatch(
            closeOrderModal()
        )}else{
            dispatch(
                closePopUp()
            )
        }
    }
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27 || modalOrder === false) {
               close()
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return ReactDOM.createPortal(
        <> <ModalOverlay/>
            <div className={styles.centerContainer}>
                <div className={styles.modal}>
                    {props.children}

                </div>
            </div>

        </>,
        document.getElementById("portal")
    )
}
export default Modal
