import React, {useEffect, useState} from 'react';

import './App.css';
import AppHeader from './app-header/app-header'

import BurgerIngredients from "./burger-ingredients/burger-ingredients";
import BurgerConstructor from "./burger-constructor/burger-constructor";
import Modal from "./modal/modal";
import IngredientDetails from "./ingredients-details/ingredient-details";
import PropTypes from "prop-types";
import dataTypeValidation from "../utils/prop-types";

const App = () => {

    const query = "https://norma.nomoreparties.space/api/ingredients"

    const [state, setState] = useState({
        data: [],
        error: true,
        confirmation: false
    })
    const [clickedItem,setClickeckedItem]= useState("")



    useEffect(() => {
        getProductData()

    }, [])

    const getProductData = async () => {
        setState({...state, error: false, confirmation: false});
        fetch(query)
            .then(res => res.json())
            .then(item => setState({...state, data: item.data, confirmation: true}))
            .catch(e => {
                setState({...state, error: true, confirmation: false});
            })

    }
    console.log(state.data)

    return (


        <div className="App">
        <div id="portal">
            <AppHeader/>
            <div style={{display: "flex"}}>
                {state.confirmation
                    ? <><BurgerIngredients data={state.data} ></BurgerIngredients>
                        <BurgerConstructor data={state.data}/></>
                        :<BurgerConstructor data={state.data}/>
                        }

            </div>
        </div>

        </div>
    );


}

export default App;
IngredientDetails.propTypes = {
    data: PropTypes.arrayOf(dataTypeValidation)


}