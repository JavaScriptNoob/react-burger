import{
    GET_PRODUCT_DATA,
    REQUEST_CONFIRMED,
    REQUEST_FAILED,
    POST_ORDER,
    POST_FAILED,
    POST_CONFIRMED

} from "../actions/actions";

const initialState ={
    productsHaveBeenRecieved:false,
    productsRequestConfirmed:false,
    productsRequest:false,
    productsData:[],
    productsRequestFailed:false,
    productErrBody:[],
    orderNumber:null,
    postHaveBeenRecieved:false,
    postRequestConfirmed:false,
    postRequest:false,
    openModal:false,
    postRequestFailed:false,
    orderErrBody:[]
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
                productErrBody: action.productsRequestFailed,
                productsRequestFailed: true
            }
        default:
            return state
    }
}
export const orderNumberReducer = (state = initialState, action) => {
    switch (action.type) {
        // Добавление новой задачи в список дел
        case POST_ORDER:
            return {
                ...state,
                postRequest: true
            }

        case POST_CONFIRMED:
            return {
                ...state,
                postHaveBeenRecieved: true,
                orderNumber: action.orderNumber,
                postRequest: false
            }
        case POST_FAILED:
            return {
                ...state,
                postErrBody: action.postFailed,
               postRequestFailed: true
            }
        default:
            return state
    }
}