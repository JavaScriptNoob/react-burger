import {_QUERY, errorHandling, errorHanlin} from "../api";
import {GET_PRODUCT_DATA_REQUEST, REQUEST_SUCCESS, REQUEST_FAILED} from "../reducers/index-reducer";

export const getProductsData = () => {
    return function (dispatch) {
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