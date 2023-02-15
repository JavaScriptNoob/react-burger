import React, {useEffect, useState} from "react";
import styles from './modal.module.css';
import ModalOverlay from "../modal-overlay/modal-overlay";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
const Modal = ({closeModal,...props}) => {
    const [state, setState] = useState(false)
    useEffect(() => {
        setState(props.confirm)

    })
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                closeModal()
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [closeModal]);

    return ReactDOM.createPortal(
        <> <ModalOverlay/>
            <div className={styles.modal}>
                {props.children}

            </div>
        </>,
        document.getElementById("portal")
    )

}
export default Modal
Modal.propTypes = {
    confirm: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}
