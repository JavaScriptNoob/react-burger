import { POST_SUCCESS, ORDER_NUMBER_CLEAR, POST_FAILED, POST_ORDER_REQUEST} from "./index-reducer";
import  { PayloadAction} from "@reduxjs/toolkit";
import {TOrderDataAction} from "../actions/order-actions";


export const initialState ={

    orderNumber:null,
    postHaveBeenRecieved:false,
    postRequestConfirmed:false,
    postRequest:false,
    postRequestFailed:false ,

}
export const orderNumberReducer = (state = initialState, action:TOrderDataAction) => {
    switch (action.type) {

        case POST_ORDER_REQUEST:
            return {
                ...state,
                postRequest: true
            }

        case POST_SUCCESS:
            return {
                ...state,
                postHaveBeenRecieved: true,
                orderNumber: action.orderNumber,
                postRequest: false,

            }
        case POST_FAILED:
            return {
                ...state,
                postErrBody: action.postFailed,
                postRequestFailed: true,
                orderNumber: null
            }
        case ORDER_NUMBER_CLEAR:
            return {
                ...state,
                orderNumber: null
            }

        default:
            return state
    }
}
