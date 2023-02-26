import React, {useEffect, useState, useContext} from 'react';
import './App.css';
import AppHeader from '../app-header/app-header'
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useSelector, useDispatch } from 'react-redux';
import {getProductsData} from '../servicies/actions/actions'
import {_QUERY, _ORDERS, _INGREDIENTS, getProductData} from "../servicies/api";
import {BurgerConstructorDataContext} from "../servicies/prices";

const App = () => {
    const query = "https://norma.nomoreparties.space/api/ingredients"
    const [state, setState] = useState({
        data: [],
        error: true,
        confirmation: false
    })
    const dispatch = useDispatch();

    useEffect(() => {
        getProductData(_QUERY, setState, state, _INGREDIENTS)
        dispatch(getProductsData())
    }, [])
    return (
        <div className="App">
            <div id="portal">
                <AppHeader/>
                <div style={{display: "flex"}}>
                    <BurgerConstructorDataContext.Provider value={{state, setState}}>
                        <BurgerIngredients />
                        <BurgerConstructor />
                    </BurgerConstructorDataContext.Provider>
                </div>
            </div>
        </div>
    );
}
export default App;
