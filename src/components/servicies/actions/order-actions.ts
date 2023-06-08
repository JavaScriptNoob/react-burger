import {
    POST_SUCCESS,
    POST_FAILED,
    POST_ORDER_REQUEST,
    CLOSE_MODAL,
    CLEAR_CURRENT_LIST,
    ORDER_NUMBER_CLEAR
} from "../reducers/index-reducer";
import {errorHandling} from "../api";
import {AppDispatch} from "../../../index";
import {QueryObject} from "../../utils/types";

export const postProductData =  (arr: QueryObject) => {
    return function (dispatch:AppDispatch){
        dispatch({
            type:POST_ORDER_REQUEST,
            text:"click on button"

        })
        fetch("https://norma.nomoreparties.space/api/orders", {
            method: "post", headers: {"Content-Type": 'application/json'}, body: JSON.stringify(arr)
        })
            .then(errorHandling).then((item) => {

            dispatch({
                type:POST_SUCCESS,
                text:'open modal and show number of order',
                orderNumber:item.order.number,
                openModal: true
            })
        })
            .catch(e => {

                dispatch({
                    type:POST_FAILED,
                    text:'post failed',
                    postFailed:e,
                    orderNumber: null
                })
            })}
}
export const closeOrderModal=()=>{
    return function (dispatch:AppDispatch){
    dispatch({
        type:CLOSE_MODAL,
        openModal: false,
        orderNumber: null
    })
    dispatch({
        type:ORDER_NUMBER_CLEAR
    })
    dispatch({
        type:CLEAR_CURRENT_LIST
    })
}}
