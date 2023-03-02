import { combineReducers } from 'redux';
import {
    productsReducer, orderNumberReducer, burgerConstructorReducer
} from './reducers'
export const rootReducer = combineReducers({
    productsData: productsReducer,
    orderNumber:orderNumberReducer,
    currentList:burgerConstructorReducer
});