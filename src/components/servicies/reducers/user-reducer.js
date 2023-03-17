import {
    CHANGE_DETAILS_FAILED,
    CHANGE_DETAILS_REQUEST, CHANGE_DETAILS_SUCCESS,
    LOGIN_REQUEST_FAILED,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_USER_REQUEST,
    REGISTER_REQUEST_FAILED,
    REGISTER_REQUEST_SUCCESS,
    REGISTER_USER_REQUEST,
    RESET_REQUEST,
    RESET_SUCCESS,
    RESET_FAILED,
    SIGN_OUT_FAILED,
    SIGN_OUT_REQUEST,
    SIGN_OUT_SUCCESS, REFETCH_USER_REQUEST, REFETCH_USER_SUCCESS, REFETCH_USER_FAILED
} from "./index-reducer";


const initialState = {
    userToken: "",
    requestProcessing: false,
    requestSuccess: false,
    requestFailed: false,
    responseBody: [],
    errBody: [],
    email: '',
    name: '',
    loginRequest: false,
    loginSuccess: false,
    loginFailed: false,
    refreshToken: '',
    resetRequest: false,
    resetSuccess: false,
    resetFailed: false,
    exitRequest:false,
    exitSucess:false,
    exitFailed:false,
    refetchRequest: false,
    rerefetchSuccess: false,
    refetchFailed: false,
    changeDetailRequest:false,
    changeDetailSuccess:false,
    changeDetailFailed:false,




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
                name: action.name
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
                loginRequest: true
            }
        case LOGIN_REQUEST_SUCCESS:
            return {
                ...state,
                loginSuccess: true,
                loginRequest: false,
                userToken: action.response.accessToken,
                refreshToken: action.response.refreshToken,
                email: action.response.user.email,
                name: action.response.user.name
            }
        case LOGIN_REQUEST_FAILED:
            return {
                ...state,
                loginSuccess: false,
                loginRequest: false,
                loginFailed: true
            }
        case CHANGE_DETAILS_REQUEST:
            return {
                ...state,
                changeDetailSuccess: false,
                changeDetailRequest: true,
                changeDetailFailed: false
            }
        case CHANGE_DETAILS_SUCCESS:
            return {
                ...state,
                changeDetailSuccess: true,
                changeDetailRequest: false,
                changeDetailFailed: false
            }
        case CHANGE_DETAILS_FAILED:
            return {
                ...state,
                changeDetailSuccess: false,
                changeDetailRequest: false,
                changeDetailFailed: true
            }
        case RESET_REQUEST:
            return {
                ...state,
                resetRequest: true,
                resetSuccess: false,
                resetFailed: false
            }
        case RESET_SUCCESS:
            return {
                ...state,
                resetRequest: false,
                resetSuccess: true,
                resetFailed: false
            }
        case RESET_FAILED:
            return {
                ...state,
                resetRequest: false,
                resetSuccess: false,
                resetFailed: true
            }
        case SIGN_OUT_REQUEST:
            return {
                ...state,
                resetRequest: false,
                resetSuccess: false,
                resetFailed: true
            }
        case SIGN_OUT_SUCCESS:
            return {
                ...state,
                userToken: "",
                requestProcessing: false,
                requestSuccess: false,
                requestFailed: false,
                responseBody: [],
                errBody: [],
                email: '',
                name: '',
                loginRequest: false,
                loginSuccess: false,
                loginFailed: false,
                refreshToken: '',
                resetRequest: false,
                resetSuccess: false,
                resetFailed: false,
                exitRequest:false,
                exitSucess:false,
                exitFailed:false,
                refetchRequest: false,
                rerefetchSuccess: false,
                refetchFailed: false,
                changeDetailRequest:false,
                changeDetailSuccess:false,
                changeDetailFailed:false,
            }
        case SIGN_OUT_FAILED:
            return {
                ...state,
                resetRequest: false,
                resetSuccess: false,
                resetFailed: true
            }
        case REFETCH_USER_REQUEST:
            return {
                ...state,
                resetRequest: false,
                resetSuccess: false,
                resetFailed: true
            }
        case REFETCH_USER_SUCCESS:
            return {
                ...state,
                resetRequest: false,
                resetSuccess: false,
                resetFailed: true,
                name:action.user.name,
                email:action.user.email
            }
        case REFETCH_USER_FAILED:
            return {
                ...state,
                resetRequest: false,
                resetSuccess: false,
                resetFailed: true
            }
        default:
            return state
    }
}