import React, {useEffect} from "react";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import {DndProvider} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";

const Main =()=>{

    const dispatch = useDispatch();
    const confirmed = useSelector((state:any) => state.productsData.productsHaveBeenRecieved)
    const data= useSelector((state:any) => state.productsData.productsData)

    return(

        <div style={{display: "flex"}}>
            <DndProvider backend={HTML5Backend}>
        { confirmed?(<><BurgerIngredients />
            <BurgerConstructor /></>) :<BurgerIngredients/>

        }
    </DndProvider >
        </div>
    )
}

export default Main