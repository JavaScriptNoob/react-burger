import {ChangeEvent} from "react";
import * as router from 'react-router-dom';
import {
    ADD_BUN, ADD_ITEM_TO_CURRENT_LIST,
    CLEAR_CURRENT_LIST, DECREMENT_CURRENT_CONSTRUCTOR_LIST, DRAG_INSIDE_CONTAINER, RootState
} from "../servicies/reducers/index-reducer";
import {TBurgerConstructorAction} from "./action-types";
import {TAuthActions} from "../servicies/reducers/user-reducer";
import {TModalStatus, TOrderDataAction} from "../servicies/actions/order-actions";
import {TIngredientsPopUpAction} from "../servicies/actions/ingredient-modal-action";
import {TProductDataAction} from "../servicies/actions/get-ingredient-actions";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionCreator} from "redux";

import {TFeedSocketsAction} from "../servicies/actions/feed-action";
import {TOrderSocketsAction} from "../servicies/actions/order-archive-actions";
import {TWsActiontypes} from "./wsTypes";

export interface IItem {
    calories: number,
    carbohydrates: number,
    fat: number,
    image: string,
    image_large: string,
    image_mobile: string,
    name: string,
    price: number,
    proteins: number,
    type: string,
    __v: number
    _id: string
}
export interface IUser {

    userToken: string,
    requestProcessing: boolean,
    requestSuccess: boolean,
    requestFailed: boolean,
    responseBody: TJSONValue,
    errBody: string[],
    email: string,
    name: string,
    loginRequest: boolean,
    loginSuccess:boolean,
    loginFailed: boolean,
    refreshToken: string,
    resetRequest: boolean,
    resetSuccess: boolean,
    resetFailed: boolean,
    exitRequest:boolean,
    exitSucess:boolean,
    exitFailed:boolean,
    getUserRequest: boolean,
    getUserSuccess: boolean,
    getUserFailed: boolean,
    changeDetailRequest:boolean,
    changeDetailSuccess:boolean,
    changeDetailFailed:boolean,
    forgoPasswordRequest: boolean,
    forgotPasswordSuccess: boolean,
    forgotPasswordFailed: boolean

}
export interface IData {
    data: IItem,

}


type TJSONValue =
    | string
    | number
    | boolean
    | { [x: string]: TJSONValue }
    | Array<TJSONValue>;
export interface IConstructorItem {
    data: IItem;
    handleClose: (id: string) => void;
    moveItemInsideContainer: (dragIndex: number, hoverIndex: number) => void;
    index: number;
}

export interface ICurrentList extends Array<IItem> {
}

export type QueryObject = {
    ingredients: string[];
};

export interface IModal {
    children?: JSX.Element,
    onClose?: () => void;
    confirm?:boolean,
    title?:string

}
export interface IModalOverlayProps {
    handler: () => void;
}
export interface IResetDetails {
    newPassword: string;
    token: string;
}

export interface FormValues {
    [key: string]: string ;
}

export type FormEvent = ChangeEvent<HTMLInputElement>;


export interface ICurrentList {
    currentConstructorList: IItem[];
}
export type TAppActions =
    |TBurgerConstructorAction
    |TAuthActions
    |TOrderDataAction
    |TModalStatus
    |TIngredientsPopUpAction
    |TProductDataAction
    |TFeedSocketsAction
    |TOrderSocketsAction
  ;

export type AppDispatch<TReturnType = void> = ThunkDispatch<RootState, never, TAppActions>;
export type AppThunk<TReturn = void> = ActionCreator<
    ThunkAction<Promise<TReturn>, RootState, never, TAppActions>
>;
export type ISocketDataOrder = {
    ingredients: string[];
    _id: string;
    status: string;
    number: number;
    createdAt: string ;
    name: string;
    updatedAt: string;
};
export interface ILocation {
    from?: Location;
    background?: Location;
    pathname?: string;
    id?: string;
}
//// Router bones import * as router from 'react-router-dom';
export function useLocation<T>() {
  type L = router.Location & { state: T };

  return router.useLocation() as L;
}
export type TwsMessage = {
    success: false
    message: string
} | {
    success: true
    orders: []
    total: number
    totalToday: number
}
export type TOrderData = {
    ingredients: string[];
    _id: string;
    name: string;
    status: string;
    number: number;
    createdAt: string;
    updatedAt: string;
    owner?: string; //?
    _v?: number;
}

export type TOrdersFeed = {
    orders: TOrderData[]
    total: number
    totalToday: number
}

export type TOrdersHistory = TOrdersFeed;
