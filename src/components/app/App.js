import React, {useEffect, useState} from 'react';
import './App.css';
import AppHeader from './app-header/app-header'
import BurgerIngredients from "./burger-ingredients/burger-ingredients";
import BurgerConstructor from "./burger-constructor/burger-constructor";
import PropTypes from "prop-types";
import dataTypeValidation from "../utils/prop-types";
import {_QUERY,_ORDERS,_INGREDIENTS,getProductData} from "../servicies/api";

import data from "../utils/data";
const App = () => {
    const query = "https://norma.nomoreparties.space/api/ingredients"
    const [state, setState] = useState({
        data: [],
        error: true,
        confirmation: false
    })

    useEffect(() => {
        getProductData(_QUERY,setState,state,_INGREDIENTS)
        console.log(state)
    }, [])
    return (
        <div className="App">
            <div id="portal">
                <AppHeader/>
                <div style={{display: "flex"}}>
                    {state.confirmation
                        ? <><BurgerIngredients data={state.data} />
                            <BurgerConstructor data={state.data}/></>
                        :<BurgerConstructor data={state.data}/>
                    }
                </div>
            </div>
        </div>
    );
}
export default App;
BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(dataTypeValidation).isRequired
}