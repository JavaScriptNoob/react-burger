import React from 'react';

import './App.css';
import AppHeader from './app-header/app-header'
import Data from "../utils/data";
class  App extends React.Component {

    state = {
        Data
}

    render (){
        console.log(this.state)
        return (
            <div className="App">
                <AppHeader/>
            </div>
        );
    }

}

export default App;
