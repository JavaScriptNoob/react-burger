import {
    CHANGE_DETAILS_FAILED,
    CHANGE_DETAILS_REQUEST,
    CHANGE_DETAILS_SUCCESS,
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
    SIGN_OUT_SUCCESS,
    REFETCH_USER_REQUEST,
    REFETCH_USER_SUCCESS,
    REFETCH_USER_FAILED,
    SENT_EMAIL,
    SENT_EMAIL_SUCCESS,
    SENT_EMAIL_FAILED,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILED,
    OPEN_INGREDIENTS_POP_UP,
    CLOSE_INGREDIENTS_POP_UP,
    CLOSE_MODAL,
    OPEN_MODAL,
    GET_PRODUCT_DATA_REQUEST, REQUEST_SUCCESS, REQUEST_FAILED
} from "../servicies/reducers/index-reducer";
import {IItem} from "./types";
// USER REDUCER
export type TUserAction =
    | IRegisterUserRequestAction
    | IRegisterRequestSuccessAction
    | IRegisterRequestFailedAction
    | ILoginUserRequestAction
    | ILoginRequestSuccessAction
    | ILoginRequestFailedAction
    | IChangeDetailsRequestAction
    | IChangeDetailsSuccessAction
    | IChangeDetailsFailedAction
    | IResetRequestAction
    | IResetSuccessAction
    | IResetFailedAction
    | ISignOutRequestAction
    | ISignOutSuccessAction
    | ISignOutFailedAction
    | ISentEmailAction
    | ISentEmailSuccessAction
    | ISentEmailFailedAction
    | IGetUserRequestAction
    | IGetUserSuccessAction
    | IGetUserFailedAction;


interface IRegisterUserRequestAction {
    type: typeof REGISTER_USER_REQUEST;
}

interface IRegisterRequestSuccessAction {
    type: typeof REGISTER_REQUEST_SUCCESS;
    response: any; // Update with the appropriate type
    token: string;
    email: string;
    name: string;
}

interface IRegisterRequestFailedAction {
    type: typeof REGISTER_REQUEST_FAILED;
    err: any; // Update with the appropriate type
}

interface ILoginUserRequestAction {
    type: typeof LOGIN_USER_REQUEST;
}

interface ILoginRequestSuccessAction {
    type: typeof LOGIN_REQUEST_SUCCESS;
    response: {
        accessToken: string;
        refreshToken: string;
        user: {
            email: string;
            name: string;
        };
    };
}

interface ILoginRequestFailedAction {
    type: typeof LOGIN_REQUEST_FAILED;
}

interface IChangeDetailsRequestAction {
    type: typeof CHANGE_DETAILS_REQUEST;
}

interface IChangeDetailsSuccessAction {
    type: typeof CHANGE_DETAILS_SUCCESS;
}

interface IChangeDetailsFailedAction {
    type: typeof CHANGE_DETAILS_FAILED;
}

interface IResetRequestAction {
    type: typeof RESET_REQUEST;
}

interface IResetSuccessAction {
    type: typeof RESET_SUCCESS;
}

interface IResetFailedAction {
    type: typeof RESET_FAILED;
}

interface ISignOutRequestAction {
    type: typeof SIGN_OUT_REQUEST;
}

interface ISignOutSuccessAction {
    type: typeof SIGN_OUT_SUCCESS;
}

interface ISignOutFailedAction {
    type: typeof SIGN_OUT_FAILED;
}

interface ISentEmailAction {
    type: typeof SENT_EMAIL;
}

interface ISentEmailSuccessAction {
    type: typeof SENT_EMAIL_SUCCESS;
}

interface ISentEmailFailedAction {
    type: typeof SENT_EMAIL_FAILED;
}

interface IGetUserRequestAction {
    type: typeof GET_USER_REQUEST;
}

interface IGetUserSuccessAction {
    type: typeof GET_USER_SUCCESS;
    user: {
        email: string;
        name: string;
    };
}

interface IGetUserFailedAction {
    type: typeof GET_USER_FAILED;
}
//POST REDUCER

export type TOrderActionTypes =
    | IPostOrderRequestAction
    | IPostSuccessAction
    | IPostFailedAction
    | IOrderNumberClearAction;
export interface IPostOrderRequestAction {
    type: 'POST_ORDER_REQUEST';
}

export interface IPostSuccessAction {
    type: 'POST_SUCCESS';
    orderNumber: number;
}

export interface IPostFailedAction {
    type: 'POST_FAILED';
    postFailed: Error;
}

export interface IOrderNumberClearAction {
    type: 'ORDER_NUMBER_CLEAR';
}

//INGREDIENT MODAL

interface IOpenIngredientsPopUpAction {
    type: typeof OPEN_INGREDIENTS_POP_UP;
    payload: any; // Update with the appropriate type
}

interface ICloseIngredientsPopUpAction {
    type: typeof CLOSE_INGREDIENTS_POP_UP;
}

export type TIngredientModalActionTypes =
    | IOpenIngredientsPopUpAction
    | ICloseIngredientsPopUpAction;

// MODAL VIEW
interface OpenModalAction {
    type: typeof OPEN_MODAL;
}

interface CloseModalAction {
    type: typeof CLOSE_MODAL;
}

export type TModalViewActionTypes = OpenModalAction | CloseModalAction;

// Post Reducer
interface IGetProductDataRequestAction {
    type: typeof GET_PRODUCT_DATA_REQUEST;
}

interface IRequestSuccessAction {
    type: typeof REQUEST_SUCCESS;
    orders: IItem[];
}

interface IRequestFailedAction {
    type: typeof REQUEST_FAILED;
    productsRequestFailed:boolean;
}

export type TProductsActionTypes =
    | IGetProductDataRequestAction
    | IRequestSuccessAction
    | IRequestFailedAction;

