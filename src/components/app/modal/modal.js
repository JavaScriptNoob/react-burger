import React, {useEffect, useState} from "react";
import styles from './modal.module.css';
import ModalOverlay from "../modal-overlay/modal-overlay";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
const Modal = (props) => {
    const [state, setState] = useState(false)
    useEffect(() => {
        setState(props.confirm)
        console.log(props)
    })


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
}
