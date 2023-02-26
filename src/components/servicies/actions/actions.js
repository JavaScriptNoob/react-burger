import {_QUERY} from "../api";

export const GET_PRODUCT_DATA = 'GET_INGRIDIENTS';
export const REQUEST_CONFIRMED = 'REQUEST_CONFIRMED';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const POST_ORDER = 'POST_ORDER';
export const POST_CONFIRMED = 'POST_CONFIRMED';
export const POST_FAILED = 'POST_FAILED';

export const getProductsData = () => {
    return function (dispatch) {
        dispatch({
            type: GET_PRODUCT_DATA,
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
                    type: REQUEST_CONFIRMED,
                    productsData: item.data

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
export const postProductData =  (arr) => {
    return function (dispatch){
    dispatch({
        type:POST_ORDER,
        text:"click on button"

    })
    fetch("https://norma.nomoreparties.space/api/orders", {
        method: "post", headers: {"Content-Type": 'application/json'}, body: JSON.stringify(arr)
    })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);

            }
            return res.json();
        }).then((item) => {
        dispatch({
            type:POST_CONFIRMED,
            text:'open modal and show number of order',
            orderNumber:item.order.number,
        })
    })
        .catch(e => {

            dispatch({
                type:POST_FAILED,
                text:'post failed',
                postFailed:e
            })
        })}
}