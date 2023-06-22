import {OPEN_INGREDIENTS_POP_UP, CLOSE_INGREDIENTS_POP_UP} from "./index-reducer";

import {TIngredientsPopUpAction} from "../actions/ingredient-modal-action";
export const initialState={
    ingredientsModal:false,
    currentIngredient: {}
}
export const ingredientModalReducer = (state = initialState, action:TIngredientsPopUpAction) => {
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
