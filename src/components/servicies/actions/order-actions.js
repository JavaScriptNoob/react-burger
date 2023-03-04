import {
    POST_SUCCESS,
    POST_FAILED,
    POST_ORDER_REQUEST,
    CLOSE_MODAL,
    CLEAR_CURRENT_LIST
} from "../reducers/index-reducer";

export const postProductData =  (arr) => {
    return function (dispatch){
        dispatch({
            type:POST_ORDER_REQUEST,
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
            console.log(item)
            dispatch({
                type:POST_SUCCESS,
                text:'open modal and show number of order',
                orderNumber:item.order.number,
                openModal: true
            })
        })
            .catch(e => {
                console.log(e)
                dispatch({
                    type:POST_FAILED,
                    text:'post failed',
                    postFailed:e
                })
            })}
}
export const closeOrderModal=()=>{
    return function (dispatch){
    dispatch({
        type:CLOSE_MODAL,
        openModal: false
    })
    dispatch({
        type:CLEAR_CURRENT_LIST
    })
}}
