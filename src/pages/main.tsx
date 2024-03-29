import React     from "react";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import {BurgerConstructor} from "../components/burger-constructor/burger-constructor";
import {DndProvider} from "react-dnd";
import { useSelector} from "../components/servicies/customHooks/typeHooks";

const Main =()=>{


    const confirmed = useSelector((state:any) => state.productsData.productsHaveBeenRecieved)

    return(

        <div style={{display: "flex"}}>
            <DndProvider backend={HTML5Backend}>
        { confirmed?(<><BurgerIngredients />
          <div  data-testid="wrapper" >  <BurgerConstructor  /></div></>) :<BurgerIngredients/>

        }
    </DndProvider >
        </div>
    )
}

export default Main
