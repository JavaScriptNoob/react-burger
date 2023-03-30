import React,{useEffect} from "react";
import styles from "./ingredient-details.module.css" ;
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {closePopUp} from "../servicies/actions/ingredient-modal-action";
import {useDispatch, useSelector} from "react-redux";
import {selectorCurrentIngredient, selectorModalIngredients, selectorProducts} from "../servicies/reducers/selectors";
import {useLocation, useParams} from "react-router-dom";
import {useAppDispatch} from "../servicies/customHooks/typeHooks";
import {IItem} from "../utils/types";


const IngredientDetails=()=>{

   const dispatch =useAppDispatch();

    const  {ingredientId}  = useParams();
    const selectorItem:IItem[] = useSelector(selectorProducts)

    const item = selectorItem.find((item) => item._id === ingredientId);


    const close=()=>{
   dispatch(closePopUp())



}
    const location = useLocation();


    if (!item) {
        return null
    }
    return(
        <div>
            <div className={styles.modalHeader}>

    </div>
    <div className={styles.imageContainer}>
        <img src={item?.image} className={styles.image} alt=""/>
    </div>
    <div className={styles.nutrition}>
        <h2 style={{fontSize:"26px"}}>{item?.name}</h2>
        <ul className={styles.nutritionDescription}>
            <li className="text text_type_main-default text_color_inactive">Калории, ккал  <p>{item?.calories}</p></li>
            <li className="text text_type_main-default text_color_inactive">Углеводы, г<p>{item?.carbohydrates}</p></li>
            <li className="text text_type_main-default text_color_inactive">Белки, г<p>{item?.proteins}</p></li>
            <li className="text text_type_main-default text_color_inactive">Жиры, г <p>{item?.fat}</p></li>
        </ul>
    </div>
    </div>
)
}


export default IngredientDetails

