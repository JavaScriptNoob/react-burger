import {_QUERY} from "../api";

export const GET_PRODUCT_DATA = 'GET_INGRIDIENTS';
export const REQUEST_CONFIRMED = 'REQUEST_CONFIRMED';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export const getProductsData =  ( ) => {
 return function (dispatch ) {
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
         .then(item => {dispatch({
             type: REQUEST_CONFIRMED,
             productsData: item.data

         })})
         .catch(e => {
             dispatch({
                 type: REQUEST_FAILED,
                 productsRequestFailed: e

             })
         })
 }
}
