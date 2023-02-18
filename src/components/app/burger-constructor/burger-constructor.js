import React, {useEffect, useState, useContext} from 'react'

import {
    Button,
    ConstructorElement,
    Counter, CurrencyIcon, DragIcon, LockIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor.module.css'
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {BurgerConstructorDataContext} from "../../servicies/prices";
import PropTypes from "prop-types";
import dataTypeValidation from "../../utils/prop-types";
import {_INGREDIENTS, getProductData, postProductData} from "../../servicies/api";
import {_QUERY,_ORDERS} from "../../servicies/api";
const BurgerConstructor = () => {

    const [modal, openModal] = useState(false);
    const {state, setState} = useContext(BurgerConstructorDataContext)
    const [mess, setMess] = useState(null);
    const [err, setErr] = useState(null);

    const enter = (val) => {
       console.log(request())
        openModal(val)
    };
    const closeModal = () => {


        openModal(false)
    }
    let totalPrice = 0;

    let arrBun = []
    let arrFilling = []
    let up = " (верх)"
    let down = " (низ)"
    let prices=[]
    let joined =[]
    let error
    let response
    const objQuery = {"ingredients": []}
    state.data.map(function (item) {
        if (item.type === "bun" && !arrBun.some(e => e.type === "bun")) {
            arrBun.push(item)
            totalPrice += item.price
            prices.push(item.price)
        } else if (item.type !== "bun") {
            arrFilling.push(item)
            totalPrice += item.price
            prices.push(item.price)
        }
       return  joined = [...arrBun, ...arrFilling]


    })

    const request =()=> {
        joined.map((e) => {
            objQuery.ingredients.length>1?objQuery.ingredients.slice(0,14):
            objQuery.ingredients.push(e._id)

            console.log(objQuery)
        })

        const res =postProductData(objQuery,setMess,setErr)


    }
    useEffect(() => {
     request()

    }, [err])



    return (
        <div>
            <BurgerConstructorDataContext.Provider value={{state, setState}}>
                {modal && <Modal confirm={modal} closeModal={closeModal}>
                    <OrderDetails closeModal={closeModal}/>
                </Modal>}
                <div className={styles.scrollContainer}>
                    <ul style={{display: "flex", flexWrap: "wrap", margin: "auto", width: '100%'}}>
                        {arrBun.map((item) => (
                            <li className="mt-4" key={item._id}>
                                <div className={styles.constructorElement}>
                                    <i className="pr-3">
                                        {item.type === "bun" ? <LockIcon type="primary"/> : <DragIcon type='primary'/>}
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
                                <div className={styles.constructorElement}>
                                    <i className="pr-3">
                                        {item.type === "bun" ? <LockIcon type="primary"/> : <DragIcon type='primary'/>}
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
                                        {item.type === "bun" ? <LockIcon type="primary"/> : <DragIcon type='primary'/>}
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
                      {totalPrice}
                        <i className="pl-2"><CurrencyIcon type='primary'/></i>
                   </span>
                    </div>
                    <Button htmlType="button" type="primary" size="large" onClick={(e) => enter(true)}>Оформить
                        заказ</Button>

                </div>
            </BurgerConstructorDataContext.Provider>
        </div>

    )

}

export default BurgerConstructor;
BurgerConstructor.propTypes = {
    context: PropTypes.arrayOf(dataTypeValidation).isRequired
}