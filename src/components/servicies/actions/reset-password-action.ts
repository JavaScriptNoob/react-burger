

import {RESET_FAILED,RESET_SUCCESS,RESET_REQUEST} from "../reducers/index-reducer";
import {_QUERY} from "../api";
import {errorHandling} from "../error";
import {AppDispatch} from "../../../index";
interface IResetRequest {
    type: typeof RESET_REQUEST;
}

interface IResetSuccess {
    type: typeof RESET_SUCCESS;
}

interface IResetFailed {
    type: typeof RESET_FAILED;
}

export type TResetDetailsAction = IResetRequest
    | IResetSuccess
    | IResetFailed;
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
