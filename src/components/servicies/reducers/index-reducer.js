import { combineReducers } from 'redux';
import {burgerConstructorReducer} from "./constructor-reducer";
import {orderNumberReducer} from "./post-reducer";
import {modalViewReducer} from "./modal-view-reducer";
import {productsReducer} from "./get-reducer";
import {ingredientModalReducer} from "./ingredient_modal-reducer";
import {userReducer} from "./user-reducer";
import {forgotPasswordReducer} from "./forgot-password-reducer";

export const GET_PRODUCT_DATA_REQUEST = 'GET_PRODUCT_DATA_REQUEST';

export const REQUEST_FAILED = 'REQUEST_FAILED';
export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILED = 'POST_FAILED';
export const CLOSE_MODAL='CLOSE_MODAL';
export const REQUEST_SUCCESS ='REQUEST_SUCCESS'
export const DECREMENT_CURRENT_CONSTRUCTOR_LIST = 'DECREMENT_CURRENT_CONSTRUCTOR_LIST';
export const ADD_BUN ='ADD_BUN';
export const ADD_ITEM_TO_CURRENT_LIST ='ADD_ITEM_TO_CURRENT_LIST'
export const   DRAG_INSIDE_CONTAINER ='DRAG_INSIDE_CONTAINER'
export  const CLEAR_CURRENT_LIST = 'CLEAR_CURRENT_LIST'
export const OPEN_MODAL ='OPEN_MODAL'
export const OPEN_INGREDIENTS_POP_UP='OPEN_INGREDIENS_POP_UP'
export const CLOSE_INGREDIENTS_POP_UP='CLOSE_INGREDIENTS_POP_UP'
export const ORDER_NUMBER_CLEAR ='ORDER_NUMBER_CLEAR'
export const REGISTER_USER_REQUEST ='REGISTER_USER_REQUEST'
export const REGISTER_REQUEST_SUCCESS='REGISTER_REQUEST_SUCCESS'
export const REGISTER_REQUEST_FAILED='REGISTER_REQUEST_FAILED'
export const SENT_EMAIL='SENT_EMAIL'
export const SENT_EMAIL_SUCCESS='SENT_EMAIL_SUCCESS'
export const SENT_EMAIL_FAILED='SENT_EMAIL_FAILED'

export const LOGIN_USER_REQUEST ='LOGIN_USER_REQUEST'
export const LOGIN_REQUEST_SUCCESS='LOGIN_REQUEST_SUCCESS'
export const LOGIN_REQUEST_FAILED='LOGIN_REQUEST_FAILED'
export const GET_USER_REQUEST ='GET_USER_REQUEST'
export const GET_USER_SUCCESS ='GET_USER_SUCCESS'
export const GET_USER_FAILED ='GET_USER_FAILED'




export const rootReducer = combineReducers({
    productsData: productsReducer,
    orderNumber:orderNumberReducer,
    currentList:burgerConstructorReducer,
    modal:modalViewReducer,
    ingredientModal:ingredientModalReducer,
    user:userReducer,
    forgottenPassword:forgotPasswordReducer

});