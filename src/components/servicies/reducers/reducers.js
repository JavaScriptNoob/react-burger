import{
    GET_PRODUCT_DATA,
    REQUEST_CONFIRMED,
    REQUEST_FAILED
} from "../actions/actions";

const initialState ={
    productsHaveBeenRecieved:false,
    productsRequestConfirmed:false,
    productsRequest:false,
    productsData:[],
    productsRequestFailed:false,
    errBody:[]
}
export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        // Добавление новой задачи в список дел
        case GET_PRODUCT_DATA:
            return {
                ...state,
                productsRequest: true
            }

        case REQUEST_CONFIRMED:
            return {
                ...state,
                productsHaveBeenRecieved: true,
                productsData: action.productsData,
                productsRequest: false
            }
        case REQUEST_FAILED:
            return {
                ...state,
                errBody: action.productsRequestFailed,
                productsRequestFailed: true
            }
        default:
            return state
    }
}