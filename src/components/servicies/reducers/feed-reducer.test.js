import {
    WS_FEED_HANDSHAKE_CLOSED,
    WS_FEED_HANDSHAKE_ERROR,
    WS_FEED_HANDSHAKE_MESSAGE,
    WS_FEED_HANDSHAKE_SUCCESS
} from "../../utils/wsTypes";

import {feedReducer, initialState} from "./feed-reducer";


describe("It is test for reducer that handle FEED OF ORDERS which trying to execute \" +\n" +
    "    \"WS_FEED_HANDSHAKE_SUCCESS & WS_FEED_HANDSHAKE_ERROR &  WS_FEED_HANDSHAKE_CLOSED & WS_FEED_HANDSHAKE_MESSAGE\"", ()=>{


    it("should handle WS_FEED_HANDSHAKE_SUCCESS action", () => {
        const action = {
            type: WS_FEED_HANDSHAKE_SUCCESS,
        };

        const newState = feedReducer(initialState, action);

        expect(newState).toEqual({
            ...initialState,
            error: undefined,
            wsConnected: true,
        });
    });

    it("should handle WS_FEED_HANDSHAKE_ERROR action", () => {
        const action = {
            type: WS_FEED_HANDSHAKE_ERROR,
        };

        const newState = feedReducer(initialState, action);

        expect(newState).toEqual({
            ...initialState,
            wsConnected: false,
        });
    });

    it("should handle WS_FEED_HANDSHAKE_CLOSED action", () => {
        const action = {
            type: WS_FEED_HANDSHAKE_CLOSED,
        };

        const newState = feedReducer(initialState, action);

        expect(newState).toEqual({
            ...initialState,
            error: undefined,
            wsConnected: false,
        });
    });

    it("should handle WS_FEED_HANDSHAKE_MESSAGE action", () => {
        const payload = {
            orders: [{ id: 1, name: "Order 1" }, { id: 2, name: "Order 2" }],
            total: 2,
            totalToday: 1,
        };
        const action = {
            type: WS_FEED_HANDSHAKE_MESSAGE,
            payload,
        };

        const newState = feedReducer(initialState, action);

        expect(newState).toEqual({
            ...initialState,
            error: undefined,
            orders: payload.orders,
            total: payload.total,
            totalToday: payload.totalToday,
        });
    });






})
