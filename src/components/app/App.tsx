import React, {useEffect, useState} from 'react';

import './App.css';
import AppHeader from './app-header/app-header'

import BurgerIngredients from "./burger-ingredients/burger-ingredients";
import BurgerConstructor from "./burger-constructor/burger-constructor";

const   App =()=> {

    const query = "https://norma.nomoreparties.space/api/ingredients"

    const [state,setState] = useState({
        data:[],
        error: true,
        confirmation: false
        })

    useEffect (()=>{
        getProductData()

    },[])

    const getProductData = async( ) => {
        setState({ ...state, error: false, confirmation: false});
        fetch(query)
            .then(res => res.json())
            .then(item => setState({ ...state, data:item.data, confirmation: true }))
            .catch(e => {
                setState({ ...state, error: true, confirmation: false });
            })

    }
    console.log(state.data)

        return (


            <div className="App">

                <AppHeader/>
                <div style={{display:"flex"}}>
                    {state.confirmation
                        ? <><BurgerIngredients data ={state.data} />
                        <BurgerConstructor data = {state.data}/></>
                        :<BurgerConstructor data = {state.data}/>
                    }

                </div>


            </div>
        );


}

export default App;
