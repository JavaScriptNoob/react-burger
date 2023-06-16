import {
    TWsActiontypes,
    WS_ORDER_HANDSHAKE_CLOSED,
    WS_ORDER_HANDSHAKE_CONNECTING,
    WS_ORDER_HANDSHAKE_ERROR,
    WS_ORDER_HANDSHAKE_MESSAGE,
    WS_ORDER_HANDSHAKE_START,
    WS_ORDER_HANDSHAKE_STOP,
    WS_ORDER_HANDSHAKE_SUCCESS
} from "../../utils/wsTypes";
import {TOrderDataAction} from "./order-actions";
import {TOrdersHistory} from "../../utils/types";


export const orderArchiveActionTypes: TWsActiontypes = {
    wsConnect: WS_ORDER_HANDSHAKE_START,
    wsDisconnect: WS_ORDER_HANDSHAKE_STOP,
    wsConnecting: WS_ORDER_HANDSHAKE_CONNECTING,

    onOpen: WS_ORDER_HANDSHAKE_SUCCESS,
    onClose: WS_ORDER_HANDSHAKE_CLOSED,
    onError: WS_ORDER_HANDSHAKE_ERROR,
    onMessage: WS_ORDER_HANDSHAKE_MESSAGE
}



export interface IWsOrderHandshakeStart {
    readonly type: typeof WS_ORDER_HANDSHAKE_START;
    readonly payload: string;
}

export interface IWsOrderHandShakeDisconnect {
    readonly type: typeof WS_ORDER_HANDSHAKE_STOP;

}

export interface IWsOrderHandShakeConnecting {
    readonly type: typeof WS_ORDER_HANDSHAKE_CONNECTING;

}

export interface IWsOrderHandShakeSuccess {
    readonly type: typeof WS_ORDER_HANDSHAKE_SUCCESS;
    readonly payload: Event;
}


export interface IWsOrderHandShakeError {
    readonly type: typeof WS_ORDER_HANDSHAKE_ERROR;
    readonly payload?: Event;
}

export interface IWsOrderHandShakeClosed {
    readonly type: typeof WS_ORDER_HANDSHAKE_CLOSED;

}
export interface IWsOrderHandShakeMessage {
    readonly type: typeof WS_ORDER_HANDSHAKE_MESSAGE;
    readonly payload: TOrdersHistory;
}


export type TOrderSocketsAction =
    | IWsOrderHandShakeClosed
    | IWsOrderHandShakeError
    | IWsOrderHandshakeStart
    | IWsOrderHandShakeMessage
    | IWsOrderHandShakeSuccess
    | IWsOrderHandShakeDisconnect
    | IWsOrderHandShakeConnecting
