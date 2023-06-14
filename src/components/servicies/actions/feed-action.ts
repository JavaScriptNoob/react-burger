import {
    WS_FEED_HANDSHAKE_ERROR,
    WS_FEED_HANDSHAKE_MESSAGE,
    WS_FEED_HANDSHAKE_START,
    WS_FEED_HANDSHAKE_SUCCESS,
    WS_FEED_HANDSHAKE_CLOSED
} from "../../utils/wsTypes";

export interface IWsFeedHandshakeStart {
    readonly type: typeof WS_FEED_HANDSHAKE_START;

}

export interface IWsFeedHandShakeMessage {
    readonly type: typeof WS_FEED_HANDSHAKE_MESSAGE;
    readonly payload: any;
}

export interface IWsFeedHandShakeSuccess {
    readonly type: typeof WS_FEED_HANDSHAKE_SUCCESS;
    readonly payload: any;
}

export interface IWsFeedHandShakeError {
    readonly type: typeof WS_FEED_HANDSHAKE_ERROR;
    readonly payload: any;
}

export interface IWsFeedHandShakeClosed {
    readonly type: typeof WS_FEED_HANDSHAKE_CLOSED;

}

export type TFeedSocketsAction =
    | IWsFeedHandShakeClosed
    | IWsFeedHandShakeError
    | IWsFeedHandshakeStart
    | IWsFeedHandShakeMessage
    | IWsFeedHandShakeSuccess
