import {_QUERY} from "../api";
import {GET_PRODUCT_DATA_REQUEST, REQUEST_SUCCESS, REQUEST_FAILED} from "../reducers/index-reducer";
import {AppDispatch} from "../../../index";


interface IGetProductDataRequest {
    type: typeof GET_PRODUCT_DATA_REQUEST;
    text: string;
}

interface IRequestSuccess {
    type: typeof REQUEST_SUCCESS;
    orders: any[];
}

interface IRequestFailed {
    type: typeof REQUEST_FAILED;
    productsRequestFailed: Error;
}

export  type TProductDataAction =
    IGetProductDataRequest
    | IRequestSuccess
    | IRequestFailed;


export const getProductsData = () => {
    return function (dispatch:AppDispatch) {
        dispatch({
            type: GET_PRODUCT_DATA_REQUEST,
            text: 'my fetch'
        });
        fetch(`${_QUERY}ingredients`)
            .then(errorHandling)
            .then(item => {
                dispatch({
                    type: REQUEST_SUCCESS,
                    orders: item.data

                })
            })
            .catch(e => {
                console.log(e,54645)
                dispatch({
                    type: REQUEST_FAILED,
                    productsRequestFailed: e

                })
            })
    }
}
