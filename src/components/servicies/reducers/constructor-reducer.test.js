
import {
    ADD_BUN,
    ADD_ITEM_TO_CURRENT_LIST,
    CLEAR_CURRENT_LIST,
    DECREMENT_CURRENT_CONSTRUCTOR_LIST,
    DRAG_INSIDE_CONTAINER
} from "./index-reducer";
import {initialState} from "./constructor-reducer";
import {burgerConstructorReducer} from "./constructor-reducer";
describe ("It is test for reducer that handle ingredients request which trying to execute "  +
    "ADD_BUN & ADD_ITEM_TO_CURRENT_LIST & CLEAR_CURRENT_LIST & DECREMENT_CURRENT_CONSTRUCTOR_LIST & DRAG_INSIDE_CONTAINER", ()=>{



    it("should handle DECREMENT_CURRENT_CONSTRUCTOR_LIST action", () => {
        const payload = [{ id: 1, name: "Ingredient 1" }];
        const action = {
            type: DECREMENT_CURRENT_CONSTRUCTOR_LIST,
            payload,
        };

        const newState = burgerConstructorReducer(initialState, action);

        expect(newState).toEqual({
            ...initialState,
            currentConstructorList: payload,
        });
    });

    it("should handle DRAG_INSIDE_CONTAINER action", () => {
        const payload = [{ id: 1, name: "Ingredient 1" }];
        const action = {
            type: DRAG_INSIDE_CONTAINER,
            afterDrag: payload,
        };

        const newState = burgerConstructorReducer(initialState, action);

        expect(newState).toEqual({
            ...initialState,
            currentConstructorList: payload,
        });
    });

    it("should handle ADD_ITEM_TO_CURRENT_LIST action", () => {
        const payload = { id: 1, name: "Ingredient 1" };
        const action = {
            type: ADD_ITEM_TO_CURRENT_LIST,
            payload,
        };

        const newState = burgerConstructorReducer(initialState, action);

        expect(newState).toEqual({
            ...initialState,
            currentConstructorList: [payload],
        });
    });

    it("should handle ADD_BUN action", () => {
        const payload = { id: 1, name: "Bun 1" };
        const action = {
            type: ADD_BUN,
            payload,
        };

        const newState = burgerConstructorReducer(initialState, action);

        expect(newState).toEqual({
            ...initialState,
            bun: payload,
        });
    });

    it("should handle CLEAR_CURRENT_LIST action", () => {
        const action = {
            type: CLEAR_CURRENT_LIST,
        };

        const newState = burgerConstructorReducer(initialState, action);

        expect(newState).toEqual({
            ...initialState,
            bun: {},
            currentConstructorList: [],
        });
    });





})
