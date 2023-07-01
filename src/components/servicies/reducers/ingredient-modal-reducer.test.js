import {OPEN_INGREDIENTS_POP_UP, CLOSE_INGREDIENTS_POP_UP} from "./index-reducer";
import {initialState, ingredientModalReducer} from "./ingredient_modal-reducer";



describe("It is test for modal reducer FOR INGREDIENTS POP UP which trying to execute " +
    "OPEN_INGREDIENTS_POP_UP & CLOSE_INGREDIENTS_POP_UP", () => {

    it("should handle OPEN_INGREDIENTS_POP_UP correctly", () => {
        const action = {
            type: OPEN_INGREDIENTS_POP_UP,
            payload: { id: 1, name: "Ingredient 1" },
        };

        const nextState = ingredientModalReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            ingredientsModal: true,
            currentIngredient: { id: 1, name: "Ingredient 1" },
        });
    });

    it("should handle CLOSE_INGREDIENTS_POP_UP correctly", () => {
        const action = {
            type: CLOSE_INGREDIENTS_POP_UP,
        };

        const nextState = ingredientModalReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            ingredientsModal: false,
            currentIngredient: [],
        });
    });

})
