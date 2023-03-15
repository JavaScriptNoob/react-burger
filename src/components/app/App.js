import React, {useEffect, useState, useContext, useCallback} from 'react';
import './App.css';
import AppHeader from '../app-header/app-header'

import Main from "../../pages/main";
import {Routes, Link, Route, NavLink, useLocation, useNavigate} from "react-router-dom";
import Register from "../../pages/register";
import Login from "../../pages/login";
import ForgotPassword from "../../pages/forgot-password";
import ResetPassword from "../../pages/reset-password";
import Profile from "../../pages/profile";
import PrivateRoute from "../../pages/private-route";

import IngredientDetails from "../ingredients-details/ingredient-details";
import {CLOSE_INGREDIENTS_POP_UP} from "../servicies/reducers/index-reducer";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import Modal from "../modal/modal";
import {getProductsData} from "../servicies/actions/get-ingredient-actions";
const App = () => {

    const dispatch =useDispatch();
    useEffect(() => {

        dispatch(getProductsData())
    }, [])
    const ModalSwitch = ()=> {
        const location = useLocation();

        let background = location.state && location.state.background;

        const currentItem=useSelector(state => state.ingredientModal.currentIngredient)

        const navigate =useNavigate();
        const dispatch =useDispatch();

        const closePopup = () => {
            dispatch({
                type: CLOSE_INGREDIENTS_POP_UP
            });
            navigate(-1)
        };



        return (
            <div id="portal">
                    <AppHeader/>
                    <Routes location={background||location} >
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/forgot-password" element={<ForgotPassword/>}/>
                        <Route path="/reset-password" element={<ResetPassword/>}/>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/profile" element={<PrivateRoute/>}>
                            <Route path="/profile" element={<Profile/>}/>
                        </Route>
                        <Route path="/profile/orders" element={<PrivateRoute/>}>
                            <Route path="/profile/orders" element={<Profile/>}/>
                        </Route>
                        <Route path='/ingredients/:ingredientId' element={<IngredientDetails />} />

                    </Routes>
                {background && (
                    <Routes>
                    <Route
                        path='/ingredients/:ingredientId'
                        element={
                            <Modal
                                title='Детали ингридиента'
                                onClose={closePopup}
                            >
                                <IngredientDetails  currentItem={currentItem}/>
                            </Modal>
                        }

                    />
                    </Routes>)}

            </div>
        );
    }
    return (
        <div className="App">

                <ModalSwitch/>

        </div>
    )
}
export default App;
