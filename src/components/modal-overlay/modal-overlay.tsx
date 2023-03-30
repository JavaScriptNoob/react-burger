
import React, {FC} from "react";
import styles from './modal-overlay.module.css';
import {closePopUp} from "../servicies/actions/ingredient-modal-action";
import {useDispatch, useSelector} from "react-redux";
import {selectorModal, selectorModalIngredients} from "../servicies/reducers/selectors";
import {closeOrderModal} from "../servicies/actions/order-actions";
import {IModalOverlayProps} from "../utils/types";
import {useAppDispatch} from "../servicies/customHooks/typeHooks";

const ModalOverlay:FC<IModalOverlayProps>= ({handler}) => {
    const order =useSelector(selectorModal)
    const ingredients =useSelector(selectorModalIngredients)

    const dispatch = useAppDispatch();
    const handleIngredients  = () => {
        dispatch(closePopUp())
    }
    const handleOrder = () => {
        dispatch(
            closeOrderModal()
        )
    }
    return (<>{order?<> <div className={styles.background} onClick={handleOrder}>


            </div></>:<div className={styles.background} onClick={handler}>



            </div>

        }
        </>


    )

}
export default ModalOverlay
