import {
    WS_HANDSHAKE_CLOSED,
    WS_HANDSHAKE_ERROR,
    WS_HANDSHAKE_MESSAGE,
    WS_HANDSHAKE_START,
    WS_HANDSHAKE_SUCCESS,
    WS_ORDERS_START
} from "../../utils/wsTypes";

export interface IWSHandshakeStart {
    readonly type: typeof WS_HANDSHAKE_START;

}

export interface IWSMOrdersStart {
    readonly type: typeof WS_ORDERS_START;

}

export interface IWSHandshakeSuccess {
    readonly type: typeof WS_HANDSHAKE_SUCCESS;
    readonly payload: any;
}

export interface IWSHandshakeError {
    readonly type: typeof WS_HANDSHAKE_ERROR;
    readonly payload: any;
}

export interface IWSHandshakeMessage {
    readonly type: typeof WS_HANDSHAKE_MESSAGE;
    readonly payload: any;
}

export interface IWSHandshakeConection {
    readonly type: typeof WS_HANDSHAKE_CLOSED;
}

export type TSocketActions =
    | IWSHandshakeConection
    | IWSHandshakeError
    | IWSHandshakeMessage
    | IWSHandshakeStart
    | IWSHandshakeSuccess
    | IWSMOrdersStart;
