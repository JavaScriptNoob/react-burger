import {WS_FEED_HANDSHAKE_START, WS_FEED_HANDSHAKE_SUCCESS,WS_FEED_HANDSHAKE_MESSAGE,WS_FEED_HANDSHAKE_CLOSED,WS_FEED_HANDSHAKE_ERROR} from "../../utils/wsTypes";

import {TFeedSocketsAction} from "../actions/feed-action";
import type {ISocketDataOrder} from '../../utils/types';

type TWSFeedState = {
    wsConnected: boolean;
    orders: ISocketDataOrder[];
    total: number;
    totalToday: number;
    error?: string;
}

export const initialState: TWSFeedState = {
    wsConnected: false,
    orders: [],
    total: 0,
    totalToday: 0,
};


export const feedReducer = (state = initialState, action: TFeedSocketsAction) => {
    switch (action.type) {

        case WS_FEED_HANDSHAKE_SUCCESS:
            return {
                ...state,
                error: undefined,
                wsConnected: true
            };


        case WS_FEED_HANDSHAKE_ERROR:
            return {
                ...state,

                wsConnected: false
            };

        case WS_FEED_HANDSHAKE_CLOSED:
            return {
                ...state,
                error: undefined,
                wsConnected: false,

            };


        case WS_FEED_HANDSHAKE_MESSAGE:
            return {
                ...state,
                error: undefined,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday,
            };
        default:
            return state;
    }
};
