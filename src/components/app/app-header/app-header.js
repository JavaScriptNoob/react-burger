import React from 'react'
import {
    Counter,
    Logo,
    BurgerIcon,
    ListIcon,
    MenuIcon,
    ProfileIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './app-header.module.css'

class AppHeader extends React.Component {


    render() {

        return (
            <div className="pl-5 pr-5 pb-5 pt-5">
                <ul className="navbarList">
                    <li><a href=""> <BurgerIcon type="primary"/>Конструктор</a></li>
                    <li><a href=""> <ListIcon type="primary"/>Лента Заказов</a></li>
                    <li><a href=""><Logo/></a></li>
                    <li><a href=""><ProfileIcon type="primary"/>Личный кабинет</a></li>
                </ul>

            </div>
        )
    }
}

export default AppHeader;
