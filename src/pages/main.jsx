import React, {useEffect} from "react";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import {DndProvider} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import {getProductsData} from "../components/servicies/actions/get-ingredient-actions";

const Main =()=>{

    const dispatch = useDispatch();
    const confirmed = useSelector(state => state.productsData.productsHaveBeenRecieved)
    const data= useSelector(state => state.productsData.productsData)

    return(

        <div style={{display: "flex"}}>
            <DndProvider backend={HTML5Backend}>
        { confirmed?(<><BurgerIngredients />
            <BurgerConstructor data={data}/></>) :<BurgerIngredients/>

        }
    </DndProvider >
        </div>
    )
}

export default Main