import React, {FC} from "react";
import styles from "./ingredient-details.module.css";

import {useSelector} from "react-redux";
import {selectorProducts} from "../servicies/reducers/selectors";
import {useParams} from "react-router-dom";

import {IItem} from "../utils/types";


const IngredientDetails: FC = () => {


    const {ingredientId} = useParams();
    const selectorItem: IItem[] = useSelector(selectorProducts)
    const item = selectorItem.find((item) => item._id === ingredientId);
    if (!item) {
        return null
    }
    return (
        <div>
            <div className={styles.modalHeader}>
            </div>
            <div className={styles.imageContainer}>
                <img src={item?.image} className={styles.image} alt=""/>
            </div>
            <div className={styles.nutrition}>
                <h2 style={{fontSize: "26px"}}>{item?.name}</h2>
                <ul className={styles.nutritionDescription}>
                    <li className="text text_type_main-default text_color_inactive">Калории,
                        ккал <p>{item?.calories}</p></li>
                    <li className="text text_type_main-default text_color_inactive">Углеводы, г
                        <p>{item?.carbohydrates}</p></li>
                    <li className="text text_type_main-default text_color_inactive">Белки, г<p>{item?.proteins}</p></li>
                    <li className="text text_type_main-default text_color_inactive">Жиры, г <p>{item?.fat}</p></li>
                </ul>
            </div>
        </div>
    )
}


export default IngredientDetails

