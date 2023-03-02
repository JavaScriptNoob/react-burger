import React, {useEffect, useState} from "react";
import styles from './modal.module.css';
import ModalOverlay from "../modal-overlay/modal-overlay";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import {closeModal} from "../servicies/actions/actions";
import {useDispatch, useSelector} from "react-redux";

const Modal = (props) => {
    const modal = useSelector(state =>state.orderNumber.openModal)
    const [overlayIsOpen, setIsOpen] = useState(false);
    const dispatch =useDispatch()
    const close =()=>{
        dispatch(
            closeModal()
        )
    }
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27 || modal === false) {
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
