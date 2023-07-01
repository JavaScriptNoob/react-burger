import {ORDER_NUMBER_CLEAR, POST_FAILED, POST_ORDER_REQUEST, POST_SUCCESS} from "./index-reducer";
import {orderNumberReducer} from "./post-reducer";
import {initialState} from "./post-reducer";
describe("It is test for reducer that handle post request which trying to execute POST_SUCCESS, ORDER_NUMBER_CLEAR, POST_FAILED, POST_ORDER_REQUEST", () => {
    it("should handle POST_ORDER_REQUEST action", () => {
        const action = {
            type: POST_ORDER_REQUEST,
        };

        const newState = orderNumberReducer(initialState, action);

        expect(newState).toEqual({
            ...initialState,
            postRequest: true,
        });
    });

    it("should handle POST_SUCCESS action", () => {
        const orderNumber = "123456";
        const action = {
            type: POST_SUCCESS,
            orderNumber,
        };

        const newState = orderNumberReducer(initialState, action);

        expect(newState).toEqual({
            ...initialState,
            postHaveBeenRecieved: true,
            orderNumber,
            postRequest: false,
        });
    });

    it("should handle POST_FAILED action", () => {
        const postFailed = "Failed to post order";
        const action = {
            type: POST_FAILED,
            postFailed,
        };

        const newState = orderNumberReducer(initialState, action);

        expect(newState).toEqual({
            ...initialState,
            postErrBody: postFailed,
            postRequestFailed: true,
            orderNumber: null,
        });
    });

    it("should handle ORDER_NUMBER_CLEAR action", () => {
        const action = {
            type: ORDER_NUMBER_CLEAR,
        };

        const newState = orderNumberReducer(initialState, action);

        expect(newState).toEqual({
            ...initialState,
            orderNumber: null,
        });
    });


});
