import {OPEN_INGREDIENTS_POP_UP, CLOSE_INGREDIENTS_POP_UP} from "./index-reducer";
import {TOrderActionTypes} from "../../utils/action-types";
import {TIngredientModalActionTypes} from "../../utils/action-types";
const initialState={
    ingredientsModal:false,
    currentIngredient:[]
}
export const ingredientModalReducer = (state = initialState, action:TIngredientModalActionTypes) => {
    switch (action.type) {
        case OPEN_INGREDIENTS_POP_UP:
            return {
                ...state,
                ingredientsModal: true,
                currentIngredient: action.payload
            }



        case CLOSE_INGREDIENTS_POP_UP:
            return {
                ...state,
                ingredientsModal: false,
                currentIngredient: []
            }
        default:
            return state
    }
}
