import React, {FC} from "react";
import styles from "./order-details.module.css";
import image from "../img/done.png"
import {useSelector} from "../servicies/customHooks/typeHooks";


const OrderDetails: FC = () => {
    const orderNumber = useSelector((state: any) => state.orderNumber.orderNumber)


    return (
        <div className={styles.container}>
            <div className={styles.modalHeader}>l


            </div>

            <div className={styles.container}>

                <ul className={styles.list}>
                    <li className="text ">
                        <h1
                            className="text text_type_main-large mt-15">{orderNumber}
                        </h1>
                    </li>
                    <li className="text text_type_main-default  mt-8">
                        <span>идентификатор заказа</span>
                    </li>
                    <li className="text text_type_main-default mt-10">
                        <img className={styles.image} src={image} alt="done"/>
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
