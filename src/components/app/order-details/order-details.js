import React, {useEffect} from "react";
import Data from "../../utils/data";
import styles from "../order-details/order-details.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import image from "../../img/done.png"
import IngredientDetails from "../ingredients-details/ingredient-details";
import PropTypes from "prop-types";
import dataTypeValidation from "../../utils/prop-types";

const OrderDetails = ({closeModal}) => {

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

    return (
        <div className={styles.container}>
            <div className={styles.modalHeader}>

                <span><CloseIcon type="primary" onClick={() => closeModal()}/></span>
            </div>

            <div className={styles.container}>

                <ul className={styles.list}>
                    <li className="text ">
                        <h1
                        className="text text_type_main-large mt-15">034536
                        </h1>
                    </li>
                    <li className="text text_type_main-default  mt-8">
                        <span>идентификатор заказа</span>
                    </li>
                    <li className="text text_type_main-default mt-10">
                        <img className={styles.image} src={image}  alt="done"/>
                    </li>
                    <li className="text text_type_main-default mt-8 ">
                        <span>Ваш заказ начали готовить</span>
                    </li>
                    <li className="text text_type_main-default text_color_inactive mt-2">
                        <span>Дождитесь готовности на
                        орбитальной станции</span>
                    </li>
                </ul>
            </div>
        </div>)
}
export default OrderDetails
OrderDetails.propTypes = {
    closeModal:PropTypes.func.isRequired


}