
import {initialState, ordersHistoryReducer} from "./order-archive-reducer";
import {WS_ORDER_HANDSHAKE_CLOSED, WS_ORDER_HANDSHAKE_SUCCESS, WS_ORDER_HANDSHAKE_MESSAGE,WS_ORDER_HANDSHAKE_ERROR} from "../../utils/wsTypes";
describe("It is test for reducer that handle ORDERS HISTORY  which trying to execute " +
    "WS_ORDER_HANDSHAKE_SUCCESS & WS_ORDER_HANDSHAKE_ERROR &  WS_ORDER_HANDSHAKE_CLOSED & WS_ORDER_HANDSHAKE_MESSAGE", () => {

    it("should handle WS_ORDER_HANDSHAKE_SUCCESS action", () => {
        const action = {
            type: WS_ORDER_HANDSHAKE_SUCCESS,
        };

        const newState = ordersHistoryReducer(initialState, action);

        expect(newState).toEqual({
            ...initialState,
            error: undefined,
            wsConnected: true,
        });
    });

    it("should handle WS_ORDER_HANDSHAKE_ERROR action", () => {
        const action = {
            type: WS_ORDER_HANDSHAKE_ERROR,
        };

        const newState = ordersHistoryReducer(initialState, action);

        expect(newState).toEqual({
            ...initialState,
            wsConnected: false,
        });
    });

    it("should handle WS_ORDER_HANDSHAKE_CLOSED action", () => {
        const action = {
            type: WS_ORDER_HANDSHAKE_CLOSED,
        };

        const newState = ordersHistoryReducer(initialState, action);

        expect(newState).toEqual({
            ...initialState,
            error: undefined,
            wsConnected: false,
        });
    });

    it("should handle WS_ORDER_HANDSHAKE_MESSAGE action", () => {
        const payload = {
            orders: [{ id: 1, name: "Order 1" }, { id: 2, name: "Order 2" }],
            total: 2,
            totalToday: 1,
        };
        const action = {
            type: WS_ORDER_HANDSHAKE_MESSAGE,
            payload,
        };

        const newState = ordersHistoryReducer(initialState, action);

        expect(newState).toEqual({
            ...initialState,
            error: undefined,
            orders: payload.orders,
            total: payload.total,
            totalToday: payload.totalToday,
        });
    });



})
