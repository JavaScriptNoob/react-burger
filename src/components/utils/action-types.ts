import {
    ADD_BUN,
    ADD_ITEM_TO_CURRENT_LIST, CLEAR_CURRENT_LIST,
    DECREMENT_CURRENT_CONSTRUCTOR_LIST,
    DRAG_INSIDE_CONTAINER,
    OPEN_MODAL
} from "../servicies/reducers/index-reducer";
import {IItem} from "./types";


interface IAddBunAction {
    type: typeof ADD_BUN;
    payload: IItem;
}

interface IAddItemToCurrentListAction {
    type: typeof ADD_ITEM_TO_CURRENT_LIST;
    payload: IItem;
}

interface IDecrementCurrentConstructorListAction {
    type: typeof DECREMENT_CURRENT_CONSTRUCTOR_LIST;
    payload: IItem[];
}

interface IDragInsideContainerAction {
    type: typeof DRAG_INSIDE_CONTAINER;
    afterDrag: IItem[];
}

interface IOpenModalAction {
    type: typeof OPEN_MODAL;
}

interface  IClearCurrentListAction{
    type: typeof CLEAR_CURRENT_LIST;
}
export type TBurgerConstructorAction =
    | IAddBunAction
    | IAddItemToCurrentListAction
    | IDecrementCurrentConstructorListAction
    | IDragInsideContainerAction
    | IOpenModalAction
    |IClearCurrentListAction;

