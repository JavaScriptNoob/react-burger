import {
    WS_ORDER_HANDSHAKE_CLOSED,
    WS_ORDER_HANDSHAKE_MESSAGE,
    WS_ORDER_HANDSHAKE_SUCCESS,
    WS_ORDER_HANDSHAKE_ERROR

} from "../../utils/wsTypes";
import {TOrderSocketsAction} from "../actions/order-archive-actions";
import type {ISocketDataOrder} from '../../utils/types';

type TWSOrderState = {
    wsConnected: boolean;
    orders: ISocketDataOrder[];
    total: number;
    totalToday: number;
    error?: string;
}

export const initialState: TWSOrderState = {
    wsConnected: false,
    orders: [],
    total: 0,
    totalToday: 0,
};
export const ordersHistoryReducer = (state = initialState, action: TOrderSocketsAction) => {
    switch (action.type) {

        case WS_ORDER_HANDSHAKE_SUCCESS:
            return {
                ...state,
                error: undefined,
                wsConnected: true
            };


        case WS_ORDER_HANDSHAKE_ERROR:
            return {
                ...state,

                wsConnected: false
            };

        case WS_ORDER_HANDSHAKE_CLOSED:
            return {
                ...state,
                error: undefined,
                wsConnected: false,

            };


        case WS_ORDER_HANDSHAKE_MESSAGE:
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
