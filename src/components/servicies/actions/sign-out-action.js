import {
    SIGN_OUT_FAILED,
    SIGN_OUT_REQUEST,
    SIGN_OUT_SUCCESS
} from "../reducers/index-reducer";
import {_QUERY, errorHandling} from "../api";
import {deleteCookie, getCookie} from "../jwt";
import {refreshToken} from "./update-token-action";

export function exit() {
    console.log(localStorage.getItem('refresh'))
    return function (dispatch) {
        dispatch({
            type: SIGN_OUT_REQUEST,
        });

        fetch(`${_QUERY}auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                authorization: getCookie('access')
            },
            body: JSON.stringify({
                token: localStorage.getItem('refresh')
            })
        })
            .then(errorHandling)
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