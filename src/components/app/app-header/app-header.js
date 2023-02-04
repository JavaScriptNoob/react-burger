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
                    <li className="pl-5 pr-5 pb-5 pt-5 "><BurgerIcon  type="primary"/> <a  href="" className="pl-1" > Конструктор</a></li>
                    <li className="pl-5 pr-5 pb-5 pt-5"><ListIcon type="primary"/><a href="" className="pl-1">Лента Заказов</a></li>
                    <li style={{marginLeft: 112} } ><a href=""  ><Logo className="logo"/></a></li>
                    <li className="" style={{marginLeft: 288} }><ProfileIcon type="primary" /><a href="" className="pl-1">Личный кабинет</a></li>
                </ul>

            </div>
        )
    }
}

export default AppHeader;
