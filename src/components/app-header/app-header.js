import React from 'react'
import {
    Counter, Logo, BurgerIcon, ListIcon, MenuIcon, ProfileIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './app-header.module.css'
import {NavLink, Link, useLocation} from "react-router-dom";

const  AppHeader=()=> {

const location = useLocation()


        return (<nav className="pt-4 pb-4  " style={{display: "flex", width: "100%"}}>
            <ul className={styles.navbarList}>
                <NavLink  to="/" className={({ isActive, isPending }) =>
                        isActive  ? "text_active" : "text_color_inactive"}>
                    <li className=" ">
                        <BurgerIcon type="primary"/>
                        <span className="pl-2">
                            Конструктор
                        </span>
                    </li>
                </NavLink>
                <NavLink  to="/profile/orders/" className={({ isActive, isPending }) =>
                    isActive ? "text_active" : "text_color_inactive"
                }>
                    <li className="pl-4">
                        <ListIcon type="primary"/>
                        <span className="pl-2">
                            Лента Заказов
                        </span>
                    </li>
                </NavLink>
                <li style={{marginLeft: 112}}>
                    <span className="pl-1">
                        <Logo className="logo"/>
                    </span>
                </li>
                <NavLink  to="/profile" className={({ isActive, isPending }) =>
                    location.pathname ==="/profile" ? "text_active" : "text_color_inactive"
                }>
                    <li className="pl-3" style={{marginLeft: 288}}>
                        <ProfileIcon type="primary"/>
                        <span  className="pl-1">
                            Личный кабинет
                        </span>
                    </li>
                </NavLink>
            </ul>

        </nav>)

}

export default AppHeader;
