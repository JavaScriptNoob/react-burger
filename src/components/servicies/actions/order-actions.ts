import {
    POST_SUCCESS,
    POST_FAILED,
    POST_ORDER_REQUEST,
    CLOSE_MODAL,
    CLEAR_CURRENT_LIST,
    ORDER_NUMBER_CLEAR, OPEN_MODAL
} from "../reducers/index-reducer";
import {errorHandling} from "../api";
import {AppDispatch} from "../../../index";
import {QueryObject} from "../../utils/types";


interface IPostOrderRequest {
    type: typeof POST_ORDER_REQUEST;
    text: string;
}

interface IPostSuccess {
    type: typeof POST_SUCCESS;
    text: string;
    orderNumber: string;
    openModal: boolean;
}

interface IPostFailed {
    type: typeof POST_FAILED;
    text: string;
    postFailed: any;
    orderNumber: null;
}

export interface ICloseModal {
    type: typeof CLOSE_MODAL;
    openModal: boolean;
    orderNumber: null| number;
}
export interface IOpenModal {
    type: typeof OPEN_MODAL;
    openModal: boolean;

}


interface IOrderNumberClear {
    type: typeof ORDER_NUMBER_CLEAR;
}

interface IClearCurrentList {
    type: typeof CLEAR_CURRENT_LIST;
}

export type TOrderDataAction =
    | IPostOrderRequest
    | IPostSuccess
    | IPostFailed

    | IOrderNumberClear
    | IClearCurrentList;

export  type TModalStatus =
    | ICloseModal
    |IOpenModal


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
