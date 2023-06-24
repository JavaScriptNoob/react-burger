import React, {FC} from "react";
import styles from './modal-overlay.module.css';

import {useSelector} from "../servicies/customHooks/typeHooks";
import {selectorModal} from "../servicies/selectors";
import {closeOrderModal} from "../servicies/actions/order-actions";
import {IModalOverlayProps} from "../utils/types";
import {useDispatch} from "../servicies/customHooks/typeHooks";

const ModalOverlay: FC<IModalOverlayProps> = ({handler}) => {
    const order = useSelector(selectorModal)


    const dispatch = useDispatch();

    const handleOrder = () => {
        dispatch(
            closeOrderModal()
        )
    }
    return (<>{order ? <>
            <div className={styles.background} onClick={handleOrder}>


            </div>
        </> : <div className={styles.background} onClick={handler}>


        </div>

        }
        </>


    )

}
export default ModalOverlay
