import {
    SIGN_OUT_FAILED,
    SIGN_OUT_REQUEST,
    SIGN_OUT_SUCCESS
} from "../reducers/index-reducer";
import {_QUERY, errorHandling} from "../api";
import {deleteCookie, fetchWithRefresh, getCookie} from "../jwt";
import {refreshToken} from "./update-token-action";
import {AppDispatch} from "../../../index";

export function exit() {
    console.log(localStorage.getItem('refresh'))
    return function (dispatch:AppDispatch) {
        dispatch({
            type: SIGN_OUT_REQUEST,
        });

        fetchWithRefresh(`${_QUERY}auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                authorization: getCookie('access')
            },
            body: JSON.stringify({
                token: localStorage.getItem('refresh')
            })
        })

            .then((res) => {
                dispatch({
                    type: SIGN_OUT_SUCCESS,
                });
                console.log(res)
                deleteCookie('access');
                localStorage.removeItem('refresh');
            })
            .catch((err) => {
                dispatch({
                    type: SIGN_OUT_FAILED,
                    payload: err.message,
                });
                console.log(err)
            });
    }
};
