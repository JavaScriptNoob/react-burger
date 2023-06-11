import {
    ADD_BUN,
    ADD_ITEM_TO_CURRENT_LIST, CLEAR_CURRENT_LIST,
    DECREMENT_CURRENT_CONSTRUCTOR_LIST,
    DRAG_INSIDE_CONTAINER
} from "./index-reducer";
import {TBurgerConstructorAction} from "../../utils/action-types";
import {IItem} from "../../utils/types";
interface IBun {
    [key: string]: any;
}

type BurgerConstructorState = {
    currentConstructorList: IItem[];
    bun: IBun ;
};

const initialState:BurgerConstructorState ={

    currentConstructorList:[],
    bun:{}

}

export const burgerConstructorReducer = (state = initialState, action:TBurgerConstructorAction)=>{
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
                currentConstructorList: [...state.currentConstructorList, action.payload],


            }
        case ADD_BUN:
            return{
                ...state,
                bun: action.payload,



            }
        case CLEAR_CURRENT_LIST:
            return{
                ...state,
                bun: {},
                currentConstructorList: [],


            }

        default:
            return state



    }


}
