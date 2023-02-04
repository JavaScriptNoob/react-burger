import React from 'react'
import {
    Counter,
    Logo,
    BurgerIcon,
    ListIcon,
    MenuIcon,
    ProfileIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingrediens.module.css'

class BurgerIngredients extends React.Component {


    render() {

        return (
            <div className="pl-5 pr-5 pb-5 pt-5">

                <div>
                    <h1>Соберите бургер</h1>
                    <div>
                        <div>Булки</div>
                        <div>Соусы</div>
                        <div>Начинки</div>
                    </div>
                </div>
                <div>
                    <h1>Булки</h1>
                    <div>
                        <div>Булки</div>
                        <div>Соусы</div>
                        <div>Начинки</div>
                    </div>
                </div>
                <div>
                    <h1>Соберите бургер</h1>
                    <div>
                        <div>Булки</div>
                        <div>Соусы</div>
                        <div>Начинки</div>
                        <div>Начинки</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BurgerIngredients;
