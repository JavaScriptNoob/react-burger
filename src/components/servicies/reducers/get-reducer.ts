import {GET_PRODUCT_DATA_REQUEST, REQUEST_SUCCESS, REQUEST_FAILED} from "./index-reducer";

import {IProductsState} from "../../utils/types";
import {TProductDataAction} from "../actions/get-ingredient-actions";
import {IngredientItem} from "../../burger-ingredients/ingredient-item";




const initialState :IProductsState ={
    productsHaveBeenRecieved:false,
    productsRequestConfirmed:false,
    productsRequest:false,
    orders: [] ,
    productsRequestFailed:false,
    productErrBody:[],

}

export const productsReducer = (state: IProductsState = initialState, action:TProductDataAction) => {
    switch (action.type) {
        // Добавление новой задачи в список дел
        case GET_PRODUCT_DATA_REQUEST:
            return {
                ...state,
                productsRequest: true
            }

        case REQUEST_SUCCESS:
            return {
                ...state,
                productsHaveBeenRecieved: true,
                orders: action.orders,
                productsRequest: false
            }
        case REQUEST_FAILED:
            return {
                ...state,
                productErrBody: action.productsRequestFailed,
                productsRequestFailed: true
            }
        default:
            return state
    }
}
