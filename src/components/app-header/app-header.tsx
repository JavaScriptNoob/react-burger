import React, {FC} from 'react'
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './app-header.module.css'
import {NavLink, useLocation} from "react-router-dom";

export const AppHeader  :FC= () => {

    const location = useLocation()


    return (<nav className="pt-4 pb-4  " style={{display: "flex", width: "100%"}}>
        <ul className={styles.navbarList}>
            <NavLink to="/" className={({isActive, isPending}) =>
                isActive ? "text_active" : "text_color_inactive"}>
                <li className=" ">
                    <BurgerIcon type="primary"/>
                    <span className="pl-2">
                            Конструктор
                        </span>
                </li>
            </NavLink>
            <NavLink to="/feed" className={({isActive, isPending}) =>
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
                        <Logo/>
                    </span>
            </li>
            <NavLink to="/profile" className={({isActive, isPending}) =>
                location.pathname === "/profile" ? "text_active" : "text_color_inactive"
            }>
                <li className="pl-3" style={{marginLeft: 288}}>
                    <ProfileIcon type="primary"/>
                    <span className="pl-1">
                            Личный кабинет
                        </span>
                </li>
            </NavLink>
        </ul>

    </nav>)

}


