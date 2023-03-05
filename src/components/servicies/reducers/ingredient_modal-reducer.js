import {OPEN_INGREDIENTS_POP_UP, CLOSE_INGREDIENTS_POP_UP} from "./index-reducer";

const initialState={
    ingredientsModal:false
}
export const ingredientModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_INGREDIENTS_POP_UP:
            return {
                ...state,
                ingredientsModal: true
            }



        case CLOSE_INGREDIENTS_POP_UP:
            return {
                ...state,
                ingredientsModal: false
            }
        default:
            return state
    }
}