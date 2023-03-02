import React, {useEffect, useState, useContext, useReducer, useCallback} from 'react'
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
import {
    postProductData,
    closeModal,
    CURRENT_CONSTRUCTOR_LIST,
    DECREMENT_CURRENT_CONSTRUCTOR_LIST,
    ADD_ITEM_TO_CURRENT_LIST,
    ADD_BUN,
    REQUEST_FAILED,
    removeObjectWithId,
    removeIngredientFromCurrentList,
    DRAG_INSIDE_CONTAINER
} from "../servicies/actions/actions";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import ConstructorItems from "./constructor-items";

const initialPrice = {curPrice: 0};
const reducer = (state, action) => {
    switch (action.type) {
        case "decrement":
            return {curPrice: initialPrice.curPrice - action.payload};
        default:
            throw new Error(`Wrong type of action: ${action.type}`);
    }
}

const BurgerConstructor = (props) => {
    const dispatch = useDispatch();

    const currentList = useSelector(state => (
        state.currentList.currentConstructorList))
    const bun = useSelector(state=> state.currentList.bun)

    const openModal = useSelector(state => (
        state.orderNumber.openModal))
    const arrBun = []
    const arrFilling = []
    const up = " (верх)"
    const down = " (низ)"
    const prices = []
    let joined = []
    const objQuery = {"ingredients": []}
    const [, dropTarget] = useDrop({
        accept: 'item',
        drop(item) {

            if (item.type ==='bun'){
                dispatch({
                    type: ADD_BUN,
                    payload: item
                });
            }else{
                dispatch({
                    type: ADD_ITEM_TO_CURRENT_LIST,
                    payload: item
                });
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

    const moveItemInsideContainer = useCallback((dragIndex, hoverIndex) => {

        const dragSubject = currentList[dragIndex]
        const updated = [...currentList]
        updated.splice(dragIndex, 1)
        updated.splice(hoverIndex, 0, dragSubject)
        dispatch({
            type: DRAG_INSIDE_CONTAINER,
            afterDrag: updated,
        })

    },[currentList,dispatch])
     const removeIngredientFromCurrentList =(id,currentlist)=> {

         return function (dispatch) {
            let found = false;
            const arr = currentList.filter(v => found || !(found = v._id === id));

             return dispatch({
                 type:DECREMENT_CURRENT_CONSTRUCTOR_LIST,
                 payload:arr
             })
        }
    }

    const handleClose = useCallback((id) => {
        dispatch(removeIngredientFromCurrentList(id, currentList));
    }, [currentList]);

    const [totalPrice, dispatchTotalPrice] =
        useReducer(reducer, initialPrice);


    const enter = () => {
        request()
    };







    const request = () => {

        joined =[...currentList]
        joined.push(bun);
        console.log(joined)
        joined.map((e) => {
            objQuery.ingredients.push(e._id)
        })
        console.log(objQuery)
        dispatch(
            postProductData(objQuery)
        )

    }


    return (
        <div role={'Dustbin'} ref={dropTarget}>
            {bun.name&&<div className={styles.bunDown} key={bun._id+"3"}>
                <ul style={{display: "flex", flexWrap: "wrap", margin: "auto", width: '100%'}}>
                    <li className="mt-2" >
                        <i className="pr-3" >
                            <LockIcon type="primary"/>
                        </i>
                        <ConstructorElement
                            isLocked={true}
                            text={`${bun.name}${up}`}
                            thumbnail={bun.image}
                            price={bun.price}/>
                    </li>
                </ul>
            </div>}
            <div style={{width: '800px', height: '800px'}}>
                <ul>
                {
                    currentList&&currentList.map((item,index) => (
                        <ConstructorItems
                            handleClose={handleClose}
                            key={item._id+index}
                            data={item} index={index}
                            moveItemInsideContainer={moveItemInsideContainer}
                            id={item._id}
                        />))
                }
                </ul>
                {bun.name&&<div className={styles.bunDown} key={bun._id+"3"}>
                    <ul style={{display: "flex", flexWrap: "wrap", margin: "auto", width: '100%'}}>
                        <li className="mt-2" >
                            <i className="pr-3" >
                                <LockIcon type="primary"/>
                            </i>
                            <ConstructorElement
                                isLocked={true}
                                text={`${bun.name}${down}`}
                                thumbnail={bun.image}
                                price={bun.price}/>
                        </li>
                    </ul>
                </div>}
            </div>{openModal && <Modal>
                <OrderDetails/>
            </Modal>}

                <Button htmlType="button"
                        type="primary"
                        size="large"
                        onClick={
                            (e) => enter()
                        }>
                    Оформить заказ
                </Button>



        </div>
    )
}
export default BurgerConstructor;
