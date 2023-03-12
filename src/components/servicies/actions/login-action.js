import {LOGIN_REQUEST_FAILED, LOGIN_REQUEST_SUCCESS, LOGIN_USER_REQUEST} from "../reducers/index-reducer";
import {_QUERY, errorHandling} from "../api";
import {setToken} from "../jwt";

export function login(email, password) {
    return function (dispatch) {
        dispatch({
            type: LOGIN_USER_REQUEST
        });
        fetch(`${_QUERY}auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({

                email: email,
                password: password
            })
        })
            .then(errorHandling)
            .then(res => {
                dispatch({
                    type:LOGIN_REQUEST_SUCCESS,
                    response:res
                }); console.log(res,'i am here')
                setToken(res.accessToken, res.refreshToken)
            })
            .catch(err => {
                dispatch({
                    type: LOGIN_REQUEST_FAILED,

                })
                console.log(err)
            })
    }
}