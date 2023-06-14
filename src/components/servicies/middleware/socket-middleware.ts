import type {Middleware, MiddlewareAPI} from "redux";
import {AppDispatch} from "../../utils/types";
import {RootState} from "../reducers/index-reducer";
import {
    WS_FEED_HANDSHAKE_CLOSED,
    WS_FEED_HANDSHAKE_ERROR,
    WS_FEED_HANDSHAKE_MESSAGE,
    WS_FEED_HANDSHAKE_START,
    WS_FEED_HANDSHAKE_SUCCESS,
    WS_ORDER_HANDSHAKE_START
} from "../../utils/wsTypes";
import {getCookie} from "../jwt";


export const socketMiddleware = (wsQuery: string): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

        return next => (action: any) => {
            const { dispatch, getState } = store;
            const { type, payload } = action;

            if (type === WS_FEED_HANDSHAKE_START) {
                // объект класса WebSocket
                socket = new WebSocket(`${wsQuery}/all`);
            }
            if (type === WS_ORDER_HANDSHAKE_START ) {

                const access = getCookie("access");
                const token =access?.split('Bearer ')[1]
                console.log(token )
                socket = new WebSocket(`${wsQuery}?token=${token}`);
            }
            if (socket) {
                // функция, которая вызывается при открытии сокета
                socket.onopen = event => {
                    dispatch({ type: WS_FEED_HANDSHAKE_SUCCESS, payload: event });
                };
                // функция, которая вызывается при ошибке соединения
                socket.onerror = event => {
                    dispatch({ type: WS_FEED_HANDSHAKE_ERROR, payload: event });
                };
                // функция, которая вызывается при получения события от сервера
                socket.onmessage = event => {
                    const { data } = event;
                    console.log(event);
                    const parsedData = JSON.parse(data);
                    const { success, ...restParsedData } = parsedData;
                    dispatch({ type: WS_FEED_HANDSHAKE_MESSAGE, payload: restParsedData });
                };
                // функция, которая вызывается при закрытии соединения
                socket.onclose = event => {
                    dispatch({ type: WS_FEED_HANDSHAKE_CLOSED });
                };
            }

            next(action);
        };
    }) as Middleware;
};
