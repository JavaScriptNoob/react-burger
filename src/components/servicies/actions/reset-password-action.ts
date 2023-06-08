

import {RESET_FAILED,RESET_SUCCESS,RESET_REQUEST} from "../reducers/index-reducer";
import {_QUERY, errorHandling} from "../api";
import {AppDispatch} from "../../../index";

export function reset(password:string, token:string) {
    return function (dispatch:AppDispatch) {
        dispatch({
            type: RESET_REQUEST
        });
        fetch(`${_QUERY}password-reset/reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                password: password,
                token: token
            })
        })
            .then(errorHandling)
            .then(res => {
                dispatch({
                    type:RESET_SUCCESS,
                });
                console.log(res)
            })
            .catch(err => {

                dispatch({
                    type: RESET_FAILED
                })
                console.log(err)
            })
    }
}
