
import React from "react";
import styles from './modal-overlay.module.css';
import {closeModal} from "../servicies/actions/actions";
import {useDispatch, useSelector} from "react-redux";

const ModalOverlay = ({onClick}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(closeModal())
    }
    return (

            <div className={styles.background} onClick={handleClick}>


        </div>


    )

}
export default ModalOverlay
