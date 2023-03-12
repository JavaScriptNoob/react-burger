import {
    LOGIN_REQUEST_FAILED,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_USER_REQUEST,
    REGISTER_REQUEST_FAILED,
    REGISTER_REQUEST_SUCCESS,
    REGISTER_USER_REQUEST
} from "./index-reducer";


const initialState = {
    userToken:"",
    requestProcessing: false,
    requestSuccess: false,
    requestFailed: false,
    responseBody:[],
    errBody:[],
    email:'',
    name:'',
    loginRequest: false,
    loginSuccess: false,
    loginFailed: false,
    refreshToken:''


}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case REGISTER_USER_REQUEST:
            return {
                ...state,
                requestProcessing: true
            }

        case REGISTER_REQUEST_SUCCESS:
            return {
                ...state,
                requestSuccess: true,
                responseBody: action.response,
                userToken: action.token,
                requestProcessing: false,
                requestFailed: false,
                email: action.email,
                name : action.name
            }
        case REGISTER_REQUEST_FAILED:
            return {
                ...state,
                errBody: action.err,
                requestFailed: true,
                }
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                loginRequest: true,
            }
        case LOGIN_REQUEST_SUCCESS:
            return {
                ...state,
                loginSuccess: true,
                loginRequest: false,
                userToken: action.response.accessToken,
                refreshToken: action.response.refreshToken,
                email:action.response.user.email,
                name:action.response.user.name,

            }
        case LOGIN_REQUEST_FAILED:
            return {
                ...state,
                loginSuccess:false,
                loginRequest: false,
                loginFailed: true
            }

        default:
            return state
    }
}