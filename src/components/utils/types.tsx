import {ChangeEvent} from "react";
import { ADD_BUN,ADD_ITEM_TO_CURRENT_LIST,
CLEAR_CURRENT_LIST,DECREMENT_CURRENT_CONSTRUCTOR_LIST, DRAG_INSIDE_CONTAINER} from "../servicies/reducers/index-reducer";

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
    refreshToken: '',
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
export interface IProductsState {
    productsHaveBeenRecieved: boolean;
    productsRequestConfirmed: boolean;
    productsRequest: boolean;
    orders: IItem[]; // Replace 'any' with the appropriate type for 'orders'
    productsRequestFailed: boolean;
    productErrBody: any[]; // Replace 'any' with the appropriate type for 'productErrBody'
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
interface IDecrementCurrentConstructorListAction {
    type: typeof DECREMENT_CURRENT_CONSTRUCTOR_LIST;
    payload: IItem[]; // Replace `any` with the appropriate payload type
}

interface IDragInsideContainerAction {
    type: typeof DRAG_INSIDE_CONTAINER;
    afterDrag: IItem[]; // Replace `any` with the appropriate payload type
}

interface IAddItemToCurrentListAction {
    type: typeof ADD_ITEM_TO_CURRENT_LIST;
    payload: any; // Replace `any` with the appropriate payload type
}

interface IAddBunAction {
    type: typeof ADD_BUN;
    payload: IItem; // Replace `any` with the appropriate payload type
}

interface IClearCurrentListAction {
    type: typeof CLEAR_CURRENT_LIST;
}
export type TBurgerConstructorActionTypes =
    | IDecrementCurrentConstructorListAction
    | IDragInsideContainerAction
    | IAddItemToCurrentListAction
    | IAddBunAction
    | IClearCurrentListAction;
