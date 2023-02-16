import React from 'react';

import './App.css';
import AppHeader from './app-header/app-header'
import data from "../utils/data";
import BurgerIngredients from "./burger-ingredients/burger-ingredients";

import BurgerConstructor from "./burger-constructor/burger-constructor";

class  App extends React.Component {



    render (){
        console.log(this.state)
        return (
            <div className="App">
                <AppHeader/>

                <div style={{display:"flex"}}>
                    <BurgerIngredients data ={data} />
                    <BurgerConstructor data = {data}/>
                </div>



            </div>
        );
    }

}

export default App;
