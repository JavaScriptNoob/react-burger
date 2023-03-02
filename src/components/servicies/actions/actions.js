import {_QUERY} from "../api";

export const GET_PRODUCT_DATA = 'GET_INGRIDIENTS';
export const REQUEST_CONFIRMED = 'REQUEST_CONFIRMED';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const POST_ORDER = 'POST_ORDER';
export const POST_CONFIRMED = 'POST_CONFIRMED';
export const POST_FAILED = 'POST_FAILED';
export const CLOSE_MODAL='CLOSE_MODAL';
export const CURRENT_CONSTRUCTOR_LIST ='CURRENT_CONSTRUCTOR_LIST'
export const DECREMENT_CURRENT_CONSTRUCTOR_LIST = 'DECREMENT_CURRENT_CONSTRUCTOR_LIST';
export const ADD_BUN ='ADD_BUN';
export const ADD_ITEM_TO_CURRENT_LIST ='ADD_ITEM_TO_CURRENT_LIST'
export const   DRAG_INSIDE_CONTAINER ='DRAG_INSIDE_CONTAINER'
export  const CLEAR_CURRENT_LIST = 'CLEAR_CURRENT_LIST'
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
            console.log(item)
        dispatch({
            type:POST_CONFIRMED,
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
export const closeModal = () => {
    return function (dispatch) {
        dispatch({
            type: CLOSE_MODAL,
            text: 'closemodal',
            openModal: false
        });
        dispatch({
            type: CLEAR_CURRENT_LIST,
            bun: {},
            currentList: []

        })


    }}
function removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

    if (objWithIdIndex > -1) {
        arr.splice(objWithIdIndex, 1);
    }

    return arr;
}

// export function removeIngredientFromCurrentList(id, arr) {
//     return function (dispatch) {
//         let flag = true;
//         const updatedArr = arr.filter((item) => {
//             if (flag && item !== id) { flag = false; return item !== id; }
//             else return true;
//         });
//         dispatch({
//             type: DECREMENT_CURRENT_CONSTRUCTOR_LIST,
//             decremented: updatedArr
//         });
//
//     }
// }


