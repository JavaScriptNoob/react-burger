import {getCookie} from "../jwt";
import {REFETCH_USER_FAILED, REFETCH_USER_REQUEST, REFETCH_USER_SUCCESS} from "../reducers/index-reducer";
import {getUser, refreshToken} from "./update-token-action";
import {_QUERY} from "../api";

export function refetchUser() {
    return function (dispatch) {

        dispatch({
            type: REFETCH_USER_REQUEST,
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
                        type: REFETCH_USER_SUCCESS,
                        user: res.user,
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: REFETCH_USER_FAILED,
                    payload: err.message,
                });
            });
    }
};
