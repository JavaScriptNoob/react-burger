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

const BurgerConstructor = () => {

    const [modal, openModal] = useState(false);
    const {state, setState} = useContext(BurgerConstructorDataContext)
    const enter = () => openModal(true);
    const closeModal = () => {
        openModal(false)
    }
    let totalPrice = 0;
    state.data.map((items) => {
        totalPrice += items.price
    })

    console.log(totalPrice)
    return (
        <div>
            <BurgerConstructorDataContext.Provider value={{state, setState}}>
                {modal && <Modal confirm={modal} closeModal={closeModal}>
                    <OrderDetails closeModal={closeModal}/>
                </Modal>}
                <div className={styles.scrollContainer}>
                    <ul style={{display: "flex", flexWrap: "wrap", margin: "auto", width: '100%'}}>
                        {state.data.map((item) => (

                            <li className="mt-4" key={item._id}>

                                <div className={styles.constructorElement}>
                                    <i className="pr-3">
                                        {item.type === "bun" ? <LockIcon type="primary"/> : <DragIcon type='primary'/>}
                                    </i>


                                    <ConstructorElement
                                        text={item.name}
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
                    <Button htmlType="button" type="primary" size="large" onClick={(e) => openModal(true)}>Оформить
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