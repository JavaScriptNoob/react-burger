import { combineReducers } from 'redux';
import { productsReducer, orderNumberReducer
} from './reducers'
export const rootReducer = combineReducers({
    productsData: productsReducer,
    orderNumber:orderNumberReducer
});