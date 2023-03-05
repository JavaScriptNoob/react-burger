import React,{useEffect} from "react";
import styles from "./ingredient-details.module.css" ;
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {closePopUp} from "../servicies/actions/ingredient-modal-action";
import {useDispatch} from "react-redux";


const IngredientDetails=({ ...props})=>{
   const dispatch =useDispatch();
const close=()=>{
   dispatch(closePopUp())



}



    return(
        <div>
            <div className={styles.modalHeader}>
        <h1 className="text text_type_main-large">Детали ингридиента</h1>
        <span><CloseIcon type="primary" onClick={()=>close()} /></span>
    </div>
    <div className={styles.imageContainer}>
        <img src={props.items.image} className={styles.image} alt=""/>
    </div>
    <div className={styles.nutrition}>
        <h2 style={{fontSize:"26px"}}>{props.items.name}</h2>
        <ul className={styles.nutritionDescription}>
            <li className="text text_type_main-default text_color_inactive">Калории, ккал  <p>{props.items.calories}</p></li>
            <li className="text text_type_main-default text_color_inactive">Углеводы, г<p>{props.items.carbohydrates}</p></li>
            <li className="text text_type_main-default text_color_inactive">Белки, г<p>{props.items.proteins}</p></li>
            <li className="text text_type_main-default text_color_inactive">Жиры, г <p>{props.items.fat}</p></li>
        </ul>
    </div>
    </div>
)
}


export default IngredientDetails

