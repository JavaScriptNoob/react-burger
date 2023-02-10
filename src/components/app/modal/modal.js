import React, {useEffect, useState} from "react";
import styles from './modal.module.css'

const Modal = (props) => {
    const [state, setState] = useState()
    useEffect(() => {
        setState(props.data)
    }, {state})
    const act = () => {

        console.log(state)
    }
    return (
        <div>
            <div className={styles.modal}>

                <h1 style={{color: "black"}}>{props.data._id}</h1>

            </div>

        </div>
    )

}
export default Modal