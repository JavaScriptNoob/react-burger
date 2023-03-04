
import React from "react";
import styles from './modal-overlay.module.css';
import {closePopUp} from "../servicies/actions/ingredient-modal-action";
import {useDispatch, useSelector} from "react-redux";
import {selectorModal, selectorModalIngredients} from "../servicies/reducers/selectors";
import {closeOrderModal} from "../servicies/actions/order-actions";

const ModalOverlay = () => {
    const order =useSelector(selectorModal)
    const ingredients =useSelector(selectorModalIngredients)

    const dispatch = useDispatch();
    const handleIngredients = () => {
        dispatch(closePopUp())
    }
    const handleOrder = () => {
        dispatch(
            closeOrderModal()
        )
    }
    return (<>{order?<> <div className={styles.background} onClick={handleOrder}>


            </div></>:<div className={styles.background} onClick={handleIngredients}>


            </div>

        }
        </>


    )

}
export default ModalOverlay
