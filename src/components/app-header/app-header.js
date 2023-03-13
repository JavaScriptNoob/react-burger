import React from 'react'
import {
    Counter, Logo, BurgerIcon, ListIcon, MenuIcon, ProfileIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './app-header.module.css'
import {NavLink, Link} from "react-router-dom";

class AppHeader extends React.Component {


    render() {

        return (<nav className="pt-4 pb-4  " style={{display: "flex", width: "100%"}}>
            <ul className={styles.navbarList}>
                <NavLink to="/" className={({isActive, isPendling}) =>
                    isPendling ? "pendling" : isActive ? "active" : ""
                }>
                    <li className=" ">
                        <BurgerIcon type="primary"/>
                        <span href="src/components/app-header" className="pl-1">
                            Конструктор
                        </span>
                    </li>
                </NavLink>
                <NavLink to="/" className={({isActive, isPendling}) =>
                    isPendling ? "pendling" : isActive ? "active" : ""
                }>
                    <li className="pl-4">
                        <ListIcon type="primary"/>
                        <span href="src/components/app-header" className="pl-1">
                            Лента Заказов
                        </span>
                    </li>
                </NavLink>
                <li style={{marginLeft: 112}}>
                    <span href="src/components/app-header">
                        <Logo className="logo"/>
                    </span>
                </li>
                <NavLink to="/profile" className={({isActive, isPendling}) =>
                    isPendling ? "pendling" : isActive ? "active" : ""
                }>
                    <li className="pl-3" style={{marginLeft: 288}}>
                        <ProfileIcon type="primary"/>
                        <span href="src/components/app-header" className="pl-1">
                            Личный кабинет
                        </span>
                    </li>
                </NavLink>
            </ul>

        </nav>)
    }
}

export default AppHeader;
