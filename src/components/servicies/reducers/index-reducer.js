import { combineReducers } from 'redux';
import { productsReducer
} from './reducers'
export const rootReducer = combineReducers({
    productsData: productsReducer
});