import React from 'react';

import './App.css';
import AppHeader from './app-header/app-header'
import data from "../utils/data";
import BurgerIngredients from "./burger-ingredients/burger-ingredients";

class  App extends React.Component {



    render (){
        console.log(this.state)
        return (
            <div className="App">
                <AppHeader/>
                <BurgerIngredients data ={data} />
            </div>
        );
    }

}

export default App;
