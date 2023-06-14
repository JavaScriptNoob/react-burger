import {
    WS_ORDER_HANDSHAKE_CLOSED,
    WS_ORDER_HANDSHAKE_ERROR,
    WS_ORDER_HANDSHAKE_MESSAGE,
    WS_ORDER_HANDSHAKE_START,
    WS_ORDER_HANDSHAKE_SUCCESS
} from "../../utils/wsTypes";

export interface IWsOrderHandshakeStart {
    readonly type: typeof WS_ORDER_HANDSHAKE_START;

}

export interface IWsOrderHandShakeMessage {
    readonly type: typeof WS_ORDER_HANDSHAKE_MESSAGE;
    readonly payload: any;
}

export interface IWsOrderHandShakeSuccess {
    readonly type: typeof WS_ORDER_HANDSHAKE_SUCCESS;
    readonly payload: any;
}

export interface IWsOrderHandShakeError {
    readonly type: typeof WS_ORDER_HANDSHAKE_ERROR;
    readonly payload: any;
}

export interface IWsOrderHandShakeClosed {
    readonly type: typeof WS_ORDER_HANDSHAKE_CLOSED;

}

export type TOrderSocketsAction =
    | IWsOrderHandShakeClosed
    | IWsOrderHandShakeError
    | IWsOrderHandshakeStart
    | IWsOrderHandShakeMessage
    | IWsOrderHandShakeSuccess
