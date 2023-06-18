import {
    TWsActiontypes,
    WS_FEED_HANDSHAKE_CLOSED,
    WS_FEED_HANDSHAKE_CONNECTING,
    WS_FEED_HANDSHAKE_ERROR,
    WS_FEED_HANDSHAKE_MESSAGE,
    WS_FEED_HANDSHAKE_START,
    WS_FEED_HANDSHAKE_STOP,
    WS_FEED_HANDSHAKE_SUCCESS
} from "../../utils/wsTypes";
import {TOrdersFeed} from "../../utils/types";



export const feedActionTypes: TWsActiontypes = {
    wsConnect: WS_FEED_HANDSHAKE_START,
    wsDisconnect: WS_FEED_HANDSHAKE_STOP,
    wsConnecting: WS_FEED_HANDSHAKE_CONNECTING,

    onOpen: WS_FEED_HANDSHAKE_SUCCESS,
    onClose: WS_FEED_HANDSHAKE_CLOSED,
    onError: WS_FEED_HANDSHAKE_ERROR,
    onMessage: WS_FEED_HANDSHAKE_MESSAGE
}



export interface IWsFeedHandshakeStart {
    readonly type: typeof WS_FEED_HANDSHAKE_START;
    readonly payload: string;
}

export interface IWsFeedHandShakeDisconnect {
    readonly type: typeof WS_FEED_HANDSHAKE_STOP;

}

export interface IWsFeedHandShakeConnecting {
    readonly type: typeof WS_FEED_HANDSHAKE_CONNECTING;

}

export interface IWsFeedHandShakeSuccess {
    readonly type: typeof WS_FEED_HANDSHAKE_SUCCESS;
    readonly payload: Event;
}


export interface IWsFeedHandShakeError {
    readonly type: typeof WS_FEED_HANDSHAKE_ERROR;
    readonly payload?: Event;
}

export interface IWsFeedHandShakeClosed {
    readonly type: typeof WS_FEED_HANDSHAKE_CLOSED;

}
export interface IWsFeedHandShakeMessage {
    readonly type: typeof WS_FEED_HANDSHAKE_MESSAGE;
    readonly payload: TOrdersFeed;
}


export type TFeedSocketsAction =
    | IWsFeedHandShakeClosed
    | IWsFeedHandShakeError
    | IWsFeedHandshakeStart
    | IWsFeedHandShakeMessage
    | IWsFeedHandShakeSuccess
    | IWsFeedHandShakeDisconnect
    | IWsFeedHandShakeConnecting
