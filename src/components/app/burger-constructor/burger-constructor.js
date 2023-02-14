import React, {useEffect, useState} from 'react'

import {
    Button,
    ConstructorElement,
    Counter, CurrencyIcon, DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor.module.css'
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredients-details/ingredient-details";
import PropTypes from "prop-types";
import dataTypeValidation from "../../utils/prop-types";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

const BurgerConstructor =(props)=> {

    const [modal, openModal] = useState(false);
    const enter = () => openModal(true);
    const closeModal = ()=>{
        openModal(false)
    }



        return (
            <div>
                {modal&&<Modal confirm={modal}>
                    <OrderDetails closeModal={closeModal} />
                </Modal>}
            <div className={ styles.scrollContainer } >
                <ul style={{display:"flex", flexWrap: "wrap", margin: "auto",width:'100%'}}>
                    {props.data.map((item,index) => (
                        <li className="mt-4" key={index+10}>
                            <div className={styles.constructorElement}>
                                <i className="pr-3">
                                    <DragIcon type='primary' />
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
                   <div  ><span className="text text_type_main-large">
                      610
                       <i className="pl-2"><CurrencyIcon  type='primary'/></i>
                   </span>
                   </div>
                   <Button htmlType="button" type="primary" size="large" onClick={(e)=>openModal(true)} >Оформить заказ</Button>

               </div>
    </div>

        )

}

export default BurgerConstructor;
BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(dataTypeValidation)
}