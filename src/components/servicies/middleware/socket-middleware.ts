import type {Middleware, MiddlewareAPI} from "redux";
import {AppDispatch} from "../../utils/types";
import {RootState} from "../reducers/index-reducer";
import {
    TWsActiontypes,

} from "../../utils/wsTypes";

import {getCookie} from "../jwt";
import {refreshToken} from "../actions/update-token-action";
import {createNextState} from "@reduxjs/toolkit";
import {feedActionTypes} from "../actions/feed-action";
type TwsMessage = {
    success: false
    message: string
} | {
    success: true
    orders: []
    total: number
    totalToday: number
}
export const socketMiddleware = (wsQuery: TWsActiontypes): Middleware<{},RootState> => {

        return store  => {
            let socket: WebSocket | null = null;
            let wsUrl = '';
            let isConnected = false;
            let reconnectTimer = 0;
            return next =>action =>{
            let isConnected = false;
            const { dispatch, getState } = store;
            const { type, payload } = action;
            const { wsConnect, wsConnecting, wsDisconnect, onOpen, onClose, onError, onMessage } = wsQuery;
            if (type === wsConnect) {
                wsUrl = payload;
                socket = new WebSocket(wsUrl);
                isConnected = true;
                dispatch({ type: wsConnecting })

                socket.onopen = event => {
                    dispatch({ type: onOpen, payload: event });
                };

                socket.onerror = event => {
                    dispatch({ type: onError, payload: event });
                };

                socket.onmessage = event => {
                    const data: TwsMessage = JSON.parse(event.data);
                    const { success, ...restData } = data;

                    if (!success && data.message === "Invalid or missing token") {
                        refreshToken()
                            .then(() => {
                                const wsUrlAfterRefresh = new URL(wsUrl);
                                const token = getCookie('accessToken');
                                wsUrlAfterRefresh.searchParams.set(
                                    'token',
                                    token || ''
                                );
                                dispatch({ //диспатч экшена нового подключения
                                    type: wsConnect,
                                    payload: wsUrlAfterRefresh.href,
                                });
                            })
                            .catch((err) => {
                                dispatch({ type: onError, payload: err });
                            });

                        dispatch({ type: wsDisconnect });  //закрываем предыдущее подключение
                    } else {
                        dispatch({ type: onMessage, payload: restData });
                    }
                };

                socket.onclose = event => {
                    dispatch({ type: onClose, payload: event });

                    if (isConnected) { //прервано внешним фактором
                        dispatch({ type: wsConnecting }); //начинаем реконнект
                        reconnectTimer = window.setTimeout(() => {
                            dispatch({ type: wsConnect, payload: wsUrl });
                        }, 3000)
                    }
                };
            }

            next(action);
        };
    }
};
