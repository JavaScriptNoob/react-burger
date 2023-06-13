import React, {FC, useEffect} from 'react';
import './App.css';
import {AppHeader} from '../app-header/app-header'
import Main from "../../pages/main";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Register from "../../pages/register";
import Login from "../../pages/login";
import ForgotPassword from "../../pages/forgot-password";
import ResetPassword from "../../pages/reset-password";
import Profile from "../../pages/profile";
import PrivateRoute from "../../pages/private-route";
import IngredientDetails from "../ingredients-details/ingredient-details";
import {CLOSE_INGREDIENTS_POP_UP} from "../servicies/reducers/index-reducer";

import Modal from "../modal/modal";
import getProductsData from "../servicies/actions/get-ingredient-actions";
import Orders from "../../pages/orders";
import {useDispatch, useSelector} from "../servicies/customHooks/typeHooks";
import Feed from "../../pages/feed";
import Order from "../order/order";
import OrderArchive from "../order-archive/order-archive";
const App: FC = () => {

    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getProductsData())
    }, [])
    const ModalSwitch = () => {
        const location = useLocation();
        let background = location.state && location.state.background;
        const currentItem = useSelector((state: any) => state.ingredientModal.currentIngredient)
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const closePopup = () => {
            dispatch({
                type: CLOSE_INGREDIENTS_POP_UP
            });
            navigate(-1)
        };
        return (
            <div id="portal">
                <AppHeader/>
                <Routes location={background || location}>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/forgot-password" element={<ForgotPassword/>}/>
                    <Route path="/reset-password" element={<ResetPassword/>}/>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/feed" element={<PrivateRoute/>}>
                        <Route path="/feed" element={<Feed/>}/>
                    </Route>
                    <Route path="/feed" element={<PrivateRoute/>}>

                     </Route>
                    <Route path="/profile/orders" element={<PrivateRoute/>}>
                        <Route path="/profile/orders" element={<Profile/>}/>
                    </Route>
                    <Route path="/profile" element={<PrivateRoute/>}>
                        <Route path="/profile" element={<Profile/>}/>
                    </Route>

                    <Route path='/ingredients/:ingredientId' element={<IngredientDetails/>}/>

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
                                    <IngredientDetails/>
                                </Modal>
                            }
                        />
                    </Routes>)}
                <Routes>
                    <Route
                        path='/feed/:id'
                        element={
                            <Modal
                                title='Детали ингридиента'
                                onClose={closePopup}
                            >
                                <OrderArchive/>
                            </Modal>
                        }
                    />
                </Routes>
                <Routes>
                    <Route
                        path='/profile/orders/:id'
                        element={
                            <Modal
                                title='Детали ингридиента'
                                onClose={closePopup}
                            >
                                <OrderArchive/>
                            </Modal>
                        }
                    />
                </Routes>
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
