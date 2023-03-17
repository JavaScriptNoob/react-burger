import {CHANGE_DETAILS_FAILED, CHANGE_DETAILS_REQUEST, CHANGE_DETAILS_SUCCESS} from "../reducers/index-reducer";
import {getCookie} from "../jwt";
import {refreshToken} from "./update-token-action";
import {_QUERY} from "../api";

export function changeUserDetails(name,email, password) {
    return function (dispatch) {
        dispatch({
            type: CHANGE_DETAILS_REQUEST,
        });

        fetch(`${_QUERY}auth/user`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: getCookie('access')
            },
            body: JSON.stringify({
                email: email,
                name: name,
                password: password
            })
        })
            .then(
                (res) => {

                    return res.json();
                }
            )
            .then((res) => {

                if (res.message === 'jwt expired') {
                    dispatch(refreshToken(changeUserDetails()));
                }
                if (res.success) {
                    dispatch({
                        type: CHANGE_DETAILS_SUCCESS,
                        user: res.user,
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: CHANGE_DETAILS_FAILED,
                    payload: err.message,
                });
            });
    }
};
