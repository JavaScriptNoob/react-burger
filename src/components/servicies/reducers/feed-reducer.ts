import {WS_HANDSHAKE_CLOSED, WS_HANDSHAKE_ERROR, WS_HANDSHAKE_MESSAGE, WS_HANDSHAKE_SUCCESS} from '../../utils/wsTypes';
import {TSocketActions} from '../actions/socket-action'
import type {ISocketDataOrder} from '../../utils/types';

type TWSState = {
    wsConnected: boolean;
    orders: ISocketDataOrder[];
    total: number;
    totalToday: number;
    error?: string;
}

const initialState: TWSState = {
    wsConnected: false,
    orders: [],
    total: 0,
    totalToday: 0,
};


export const wsReducer = (state = initialState, action: TSocketActions) => {
    switch (action.type) {

        case WS_HANDSHAKE_SUCCESS:
            return {
                ...state,
                error: undefined,
                wsConnected: true
            };


        case WS_HANDSHAKE_ERROR:
            return {
                ...state,

                wsConnected: false
            };

        case WS_HANDSHAKE_CLOSED:
            return {
                ...state,
                error: undefined,
                wsConnected: false,

            };


        case WS_HANDSHAKE_MESSAGE:
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
