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

            <nav className="pt-4 pb-4  " style={{display:"flex", width:"100%"}}>
                <ul className={styles.navbarList}>

                    <li className=" "><BurgerIcon  type="primary"/> <a  href="" className="pl-1" > Конструктор</a></li>
                    <li className="pl-4"><ListIcon type="primary"/><a href="" className="pl-1">Лента Заказов</a></li>
                    <li style={{marginLeft: 112} } ><a href=""  ><Logo className="logo"/></a></li>
                    <li className="pl-3" style={{marginLeft: 288} }><ProfileIcon type="primary" /><a href="" className="pl-1">Личный кабинет</a></li>
                </ul>

            </nav>
        )
    }
}

export default AppHeader;
