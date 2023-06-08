import {REGISTER_REQUEST_FAILED, REGISTER_REQUEST_SUCCESS, REGISTER_USER_REQUEST} from "../reducers/index-reducer";
import {_QUERY, errorHandling} from "../api";
import {setToken} from "../jwt";
import {AppDispatch} from "../../../index";

export function register(name:string, email:string, password:string) {
    return function (dispatch:AppDispatch) {
        dispatch({
            type: REGISTER_USER_REQUEST
        });
        fetch(`${_QUERY}auth/register`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
            .then(errorHandling)
            .then(res => {
                dispatch({
                    type:REGISTER_REQUEST_SUCCESS,
                    response:res,
                    user: res.user,
                    token: res.accessToken,
                    email:res.user.email,
                    name: res.user.name

                }); console.log(res)
                setToken(res.accessToken, res.refreshToken)
            })
            .catch(err => {

                dispatch({
                    type: REGISTER_REQUEST_FAILED,
                    err: err
                })
            })
    }
}
