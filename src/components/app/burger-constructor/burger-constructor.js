import React, {useEffect, useState, useContext, useReducer} from 'react'

import {
    Button,
    ConstructorElement,
    CurrencyIcon,
    DragIcon,
    LockIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor.module.css'
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {BurgerConstructorDataContext} from "../../servicies/prices";
import PropTypes from "prop-types";
import dataTypeValidation from "../../utils/prop-types";
import {postProductData} from "../../servicies/api";
import {getSpaceUntilMaxLength} from "@testing-library/user-event/dist/utils";
//Use reducer is able to decrement value. I dont know how  implement increment due to constructor element
const initialPrice = {curPrice: 0};
const reducer = (state, action) => {
    switch (action.type) {
        case "decrement":
            return {curPrice: initialPrice.curPrice -action.payload};
        default:
            throw new Error(`Wrong type of action: ${action.type}`);
    }
}

const BurgerConstructor = () => {

    const [modal, openModal] = useState(false);
    const {state, setState} = useContext(BurgerConstructorDataContext)
    const [mess, setMess] = useState(null);
    const [err, setErr] = useState(null);
    const [totalPrice, dispatchTotalPrice] =
        useReducer(reducer, initialPrice);
//Creating a new variabe for mutating data  independently from context
    const currentConstructorState = state;
    const enter = (val) => {
        openModal(val)
    };
    const closeModal = () => {
        openModal(false)
    }
    const dec = (currentId) => {

        const newCartData = currentConstructorState.data.filter((prev) => prev._id !== currentId);
        currentConstructorState.data =newCartData ;
        console.log(newCartData)
        console.log(state, state.data)

    };

    let arrBun = []
    let arrFilling = []
    let up = " (верх)"
    let down = " (низ)"
    let prices = []
    let joined = []
    const objQuery = {"ingredients": []}

    currentConstructorState.data.map(function (item) {
        if (item.type === "bun" && !arrBun.some(e => e.type === "bun")) {
            arrBun.push(item)
            prices.push(item.price)
        } else if (item.type !== "bun") {
            arrFilling.push(item)
            prices.push(item.price)
            console.log(prices)
        }

        joined = [...arrBun, ...arrFilling]
        let sum = prices.reduce((a, b) => a + b, 0)
        console.log(sum)
        initialPrice.curPrice = sum;
        console.log(initialPrice, joined)

    })
    // All code in app executes two times so i decided to slice request  it each time
    const request = () => {
        joined.map((e) => {

                objQuery.ingredients.push(e._id)

        })
        const res = postProductData(objQuery, setMess, setErr)
    }

    useEffect(() => {
        request()
    }, [err])

    return (
        <div>
            <BurgerConstructorDataContext.Provider value={{state, setState}}>
                {modal && <Modal confirm={modal} closeModal={closeModal}>
                    <OrderDetails closeModal={closeModal} orderNumber={mess}/>
                </Modal>}
                <div className={styles.scrollContainer}>
                    <ul style={{display: "flex", flexWrap: "wrap", margin: "auto", width: '100%'}}>
                        {arrBun.map((item) => (
                            <li className="mt-4" key={item._id}>
                                <div className={styles.constructorElement}>
                                    <i className="pr-3">
                                        {item.type === "bun" ?
                                            <LockIcon type="primary"/>
                                            : <DragIcon type='primary'/>}
                                    </i>
                                    <ConstructorElement
                                        text={`${item.name}${up}`}
                                        thumbnail={item.image}
                                        price={item.price}/>
                                </div>
                            </li>
                        ))}
                        {arrFilling.map((item) => (
                            <li className="mt-4" key={item._id}>
                                <div className={styles.constructorElement}
                                     onClick={(e) => {
                                         dec(item._id);
                                         dispatchTotalPrice(
                                             {type: 'decrement', payload: item.price}
                                         )
                                     }}>
                                    <i className="pr-3">
                                        {
                                            item.type === "bun" ?
                                                <LockIcon type="primary"/>
                                                : <DragIcon type='primary'/>}
                                    </i>
                                    <ConstructorElement
                                        text={item.name}
                                        thumbnail={item.image}
                                        price={item.price}
                                    />
                                </div>
                            </li>
                        ))}
                        {arrBun.map((item) => (
                            <li className="mt-4" key={item._id}>
                                <div className={styles.constructorElement}>
                                    <i className="pr-3">
                                        {
                                            item.type === "bun"?
                                                <LockIcon type="primary"/>
                                                : <DragIcon type='primary'/>}
                                    </i>
                                    <ConstructorElement
                                        text={`${item.name}${down}`}
                                        thumbnail={item.image}
                                        price={item.price}/>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.orderStats}>
                    <div><span className="text text_type_main-large">
                        {initialPrice.curPrice}
                        <i className="pl-2"><CurrencyIcon type='primary'/></i>
                   </span>
                    </div>
                    <Button htmlType="button"
                            type="primary"
                            size="large"
                            onClick={
                        (e) => enter(true)
                    }>
                        Оформить заказ
                    </Button>
                </div>
            </BurgerConstructorDataContext.Provider>
        </div>
    )
}
export default BurgerConstructor;
BurgerConstructor.propTypes = {
    context: PropTypes.arrayOf(dataTypeValidation).isRequired
}