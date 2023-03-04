import {_QUERY} from "../api";
import {GET_PRODUCT_DATA_REQUEST, REQUEST_SUCCESS, REQUEST_FAILED} from "../reducers/index-reducer";

export const getProductsData = () => {
    return function (dispatch) {
        dispatch({
            type: GET_PRODUCT_DATA_REQUEST,
            text: 'my fetch'
        });
        fetch(`${_QUERY}ingredients`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }
                return res.json()
            })
            .then(item => {
                dispatch({
                    type: REQUEST_SUCCESS,
                    orders: item.data

                })
            })
            .catch(e => {
                dispatch({
                    type: REQUEST_FAILED,
                    productsRequestFailed: e

                })
            })
    }
}