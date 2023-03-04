import React, {useEffect, useState, useCallback} from 'react'
import {
    Button,
    ConstructorElement,
    CurrencyIcon,
    DragIcon, InfoIcon,
    LockIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor.module.css'
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {
    OPEN_MODAL,
    DECREMENT_CURRENT_CONSTRUCTOR_LIST,
    ADD_ITEM_TO_CURRENT_LIST,
    ADD_BUN,
    DRAG_INSIDE_CONTAINER
} from "../servicies/reducers/index-reducer";
import {postProductData} from "../servicies/actions/order-actions"
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import ConstructorItems from "./constructor-items";
import {
    selectorBun,
    selectorCurrentConstructoorList,
    selectorCurrentList,
    selectorModal
} from "../servicies/reducers/selectors";


const BurgerConstructor = (props) => {
    const dispatch = useDispatch();
    const priceListener = useSelector(selectorCurrentList)
    const currentList = useSelector(selectorCurrentConstructoorList)
    const bun = useSelector(selectorBun)
    const openModal = useSelector(selectorModal)
    const up = " (верх)"
    const down = " (низ)"
    const [currentPrice, setCurrentPrice] = useState(0);
    let joined = []
    const objQuery = {"ingredients": []}
    const [, dropTarget] = useDrop({
        accept: 'item',
        drop(item) {

            if (item.type === 'bun') {
                dispatch({
                    type: ADD_BUN,
                    payload: item,


                });
            } else {
                dispatch({
                    type: ADD_ITEM_TO_CURRENT_LIST,
                    payload: item,


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

    }, [currentList, dispatch])
    const removeIngredientFromCurrentList = (id, currentlist) => {

        return function (dispatch) {
            let found = false;
            const arr = currentList.filter(v => found || !(found = v._id === id));

            return dispatch({
                type: DECREMENT_CURRENT_CONSTRUCTOR_LIST,
                payload: arr
            })
        }
    }

    const handleClose = useCallback((id) => {
        dispatch(removeIngredientFromCurrentList(id, currentList));
    }, [currentList, bun]);

    useEffect(() => {
        setCurrentPrice(0)
    }, [currentPrice])

    const enter = () => {
        request()
    };

    useEffect(() => {
        if (currentList.length > 0 || bun.name) {
            joined = [...currentList]
            if (bun.name) {
                joined.push(bun)
            }
        }
        let prices = joined.reduce((sum, item) => {
            console.log(joined)
            if (item.type === 'bun') {
                console.log("I am here")
                return sum += item.price * 2
            } else if (item.type !== bun) {
                return sum += item.price
            }
        }, 0)
        setCurrentPrice(prices)
    }, [priceListener, currentPrice]);

    if (isNaN(currentPrice)) {
        setCurrentPrice(0)
    }
    const request = () => {
        joined.map((e) => {
            objQuery.ingredients.push(e._id)
        })
        console.log(objQuery)
        dispatch(
            postProductData(objQuery)
        )
        dispatch({
            type: OPEN_MODAL
        })

    }
    return (
        <div className="mt-30">
            <div role={'Dustbin'} ref={dropTarget}>
                {bun.name && <div className={styles.bunDown} key={bun._id + "3"}>
                    <ul style={{display: "flex", flexWrap: "wrap", margin: "auto", width: '100%'}}>
                        <li className="mt-2">
                            <i className="pr-3">
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
                <div style={{width: '800px', height: '600px'}}>
                    {currentPrice === 0 && <div className={styles.hint}>

                        <p className="text text_type_main-medium"><InfoIcon type="primary"/> Создайте свой собственный
                            бургер </p>
                        <p className="text text_type_main-medium"> перетащив понравившиеся ингридиенты</p>
                    </div>}
                    <ul className={styles.scrollContainer}>
                        {
                            currentList && currentList.map((item, index) => (
                                <ConstructorItems
                                    handleClose={handleClose}
                                    key={item._id + index}
                                    data={item} index={index}
                                    moveItemInsideContainer={moveItemInsideContainer}
                                    id={item._id}
                                />))
                        }
                    </ul>

                </div>
                {openModal && <Modal>
                    <OrderDetails/>
                </Modal>}
            </div>
            {bun.name && <div className={styles.bunDown} key={bun._id + "3"}>
                <ul style={{display: "flex", flexWrap: "wrap", margin: "auto", width: '100%'}}>
                    <li className="mt-2">
                        <i className="pr-3">
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
            <div className={styles.orderStats}>
                <div><span className="text text_type_main-large">
                        {currentPrice}
                    <i className="pl-2"><CurrencyIcon type='primary'/></i>
                   </span>
                </div>
                <Button htmlType="button"
                        type="primary"
                        size="large"
                        disabled={currentPrice < 1}
                        onClick={
                            (e) => enter()
                        }>
                    Оформить заказ
                </Button>
            </div>


        </div>
    )
}
export default BurgerConstructor;
