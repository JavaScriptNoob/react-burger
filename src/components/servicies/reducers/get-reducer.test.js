import {GET_PRODUCT_DATA_REQUEST, REQUEST_SUCCESS, REQUEST_FAILED} from "./index-reducer";

import {initialState, productsReducer} from "./get-reducer";

describe("It is test for reducer that handle ingredients request which trying to execute " +
    "GET_PRODUCT_DATA_REQUEST & REQUEST_SUCCESS &  REQUEST_FAILED", () => {
    it("should handle GET_PRODUCT_DATA_REQUEST action", () => {
        const action = {
            type: GET_PRODUCT_DATA_REQUEST,
        };

        const newState = productsReducer(initialState, action);

        expect(newState).toEqual({
            ...initialState,
            productsRequest: true,
        });
    });

    it("should handle REQUEST_SUCCESS action", () => {
        const orders = [{ id: 1, name: "Product 1" }, { id: 2, name: "Product 2" }];
        const action = {
            type: REQUEST_SUCCESS,
            orders,
        };

        const newState = productsReducer(initialState, action);

        expect(newState).toEqual({
            ...initialState,
            productsHaveBeenRecieved: true,
            orders,
            productsRequest: false,
        });
    });

    it("should handle REQUEST_FAILED action", () => {
        const productsRequestFailed = true;
        const productErrBody = true;
        const action = {
            type: REQUEST_FAILED,
            productsRequestFailed,
            productErrBody,
        };

        const newState = productsReducer(initialState, action);

        expect(newState).toEqual({
            ...initialState,
            productsRequestFailed,
            productErrBody,
        });
    });



})
