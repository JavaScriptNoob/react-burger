import { POST_SUCCESS, POST_FAILED, POST_ORDER_REQUEST} from "../reducers/index-reducer";
const initialState ={

    orderNumber:null,
    postHaveBeenRecieved:false,
    postRequestConfirmed:false,
    postRequest:false,
    postRequestFailed:false,

}
export const orderNumberReducer = (state = initialState, action) => {
    switch (action.type) {

        case POST_ORDER_REQUEST:
            return {
                ...state,
                postRequest: true
            }

        case POST_SUCCESS:
            return {
                ...state,
                postHaveBeenRecieved: true,
                orderNumber: action.orderNumber,
                postRequest: false,

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