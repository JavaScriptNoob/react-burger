import{
    GET_PRODUCT_DATA,
    REQUEST_CONFIRMED,
    REQUEST_FAILED,
    POST_ORDER,
    POST_FAILED,
    POST_CONFIRMED,
    CLOSE_MODAL,
    CURRENT_CONSTRUCTOR_LIST,
    DECREMENT_CURRENT_CONSTRUCTOR_LIST,
    ADD_ITEM_TO_CURRENT_LIST,
    ADD_BUN,
    DRAG_INSIDE_CONTAINER,
    CLEAR_CURRENT_LIST


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
    orderErrBody:[],
    currentConstructorList:[],
    bun:{}
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
                postRequest: false,
                openModal: true
            }
        case POST_FAILED:
            return {
                ...state,
                postErrBody: action.postFailed,
                postRequestFailed: true
            }
        case CLOSE_MODAL:
            return {
                ...state,
                openModal: false
            }
        default:
            return state
    }
}

export const burgerConstructorReducer = (state = initialState, action)=>{
    switch (action.type){

        case DECREMENT_CURRENT_CONSTRUCTOR_LIST:
            return{
                ...state,
                currentConstructorList: action.payload
            }
        case DRAG_INSIDE_CONTAINER: {
            return {
                ...state,
                currentConstructorList: action.afterDrag
            }
        }
        case ADD_ITEM_TO_CURRENT_LIST:
            return{
                    ...state,
                    currentConstructorList: state.currentConstructorList.concat(action.payload)

                }
        case ADD_BUN:
            return{
                ...state,
                bun: action.payload

            }
        case CLEAR_CURRENT_LIST:
            return{
                ...state,
                bun: action.bun,
                currentConstructorList: action.currentList

            }

        default:
            return state



    }


}