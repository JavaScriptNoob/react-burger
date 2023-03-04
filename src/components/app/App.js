import React, {useEffect, useState, useContext} from 'react';
import './App.css';
import AppHeader from '../app-header/app-header'
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useSelector, useDispatch } from 'react-redux';
import {getProductsData} from '../servicies/actions/get-ingredient-actions'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {


    const dispatch = useDispatch();
    const confirmed = useSelector(state => state.productsData.productsHaveBeenRecieved)
    const data= useSelector(state => state.productsData.productsData)
    useEffect(() => {

        dispatch(getProductsData())
    }, [])
    return (
        <div className="App">
            <div id="portal">
                <AppHeader/>
                <div style={{display: "flex"}}>
                    <DndProvider backend={HTML5Backend}>
                    { confirmed?(<><BurgerIngredients />
                        <BurgerConstructor data={data}/></>) :<BurgerIngredients/>

                    }
                    </DndProvider >
                </div>
            </div>
        </div>
    );
}
export default App;
