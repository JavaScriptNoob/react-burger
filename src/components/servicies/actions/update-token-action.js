import {GET_USER_FAILED, GET_USER_REQUEST, GET_USER_SUCCESS} from "../reducers/index-reducer";
import {_QUERY, errorHandling} from "../api";
import {getCookie, setToken} from "../jwt";

export function getUser() {
    return function (dispatch) {
        dispatch({
            type: GET_USER_REQUEST,
        });

        fetch(`${_QUERY}auth/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                authorization: getCookie('access')
            }
        })
            .then(
                (res) => {

                    return res.json();

                }
            )
            .then((res) => {

                if (res.message === 'jwt expired') {
                    dispatch(refreshToken(getUser()));
                }
                if (res.success) {
                    dispatch({
                        type: GET_USER_SUCCESS,
                        user: res.user,
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: GET_USER_FAILED,
                    payload: err.message,
                });
            });
    }
};
export const refreshToken = (afterRefresh) => (dispatch) => {
    fetch(`${_QUERY}auth/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            token: localStorage.getItem('refresh')
        })
    })
        .then(errorHandling)
        .then((res) => {
            setToken(res.accessToken, res.refreshToken);
            dispatch(afterRefresh());
        })
        .catch(err => console.log(err))
};


