import React, {FC, useEffect, useState} from "react";
import styles from './modal.module.css';
import ModalOverlay from "../modal-overlay/modal-overlay";
import ReactDOM from 'react-dom';
import {useSelector} from "../servicies/customHooks/typeHooks";
import {selectorModal} from "../servicies/reducers/selectors";
import {closeOrderModal} from "../servicies/actions/order-actions";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {IModal} from "../utils/types";
import {useDispatch} from "../servicies/customHooks/typeHooks";


const Modal: FC<IModal> = ({onClose, ...props}) => {
    const modalOrder = useSelector(selectorModal)
    const [domIsReady, setDomIsReady] = useState(false);
    const dispatch = useDispatch();
    const close = () => {
        if (modalOrder) {
            dispatch(
                closeOrderModal()
            )
        } else {
            if (onClose) {
                onClose()
            }
        }
    }
    useEffect(() => {
        setDomIsReady(true)
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape" || modalOrder === false) {
                if (onClose) {
                    onClose()
                }
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };

    }, [modalOrder, onClose]);
    const portalElement = document.getElementById("portal");
    return domIsReady ?
        ReactDOM.createPortal(
            <div><ModalOverlay handler={close}/>
                <div className={styles.centerContainer}>
                    <div className={styles.modal}>
                        <div className={styles.modalTop}>
                            <h1 className="text text_type_main-large">Детали ингридиента</h1>
                            <span><CloseIcon type="primary" onClick={close}/></span>
                        </div>
                        {props.children}

                    </div>
                </div>

            </div>,
            portalElement || document.createElement("div")
        ) : null
}
export default Modal
