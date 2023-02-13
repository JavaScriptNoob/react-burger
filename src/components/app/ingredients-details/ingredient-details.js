import React from "react";
import styles from "../modal/modal.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const ingredientDetails=(props)=>{


    return(
        <div>
            <div className={styles.modalHeader}>

        <h1 className="text text_type_main-large">Детали ингридиента</h1>
        <span><CloseIcon type="primary" /></span>
    </div>
    <div className={styles.imageContainer}>
        <img src={props.data.image} className={styles.image} alt=""/>
    </div>
    <div className={styles.nutrition}>
        <h2 style={{fontSize:"26px"}}>{props.data.name}</h2>
        <ul className={styles.nutritionDescription}>
            <li className="text text_type_main-default text_color_inactive">Калории, ккал  <p>{props.data.calories}</p></li>
            <li className="text text_type_main-default text_color_inactive">Углеводы, г<p>{props.data.carbohydrates}</p></li>
            <li className="text text_type_main-default text_color_inactive">Белки, г<p>{props.data.proteins}</p></li>
            <li className="text text_type_main-default text_color_inactive">Жиры, г <p>{props.data.fat}</p></li>
        </ul>
    </div>
    </div>
)
}
export default ingredientDetails