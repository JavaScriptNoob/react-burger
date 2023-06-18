
import {SENT_EMAIL, SENT_EMAIL_FAILED, SENT_EMAIL_SUCCESS} from "../reducers/index-reducer";
import {_QUERY} from "../api";
import {AppDispatch} from "../../utils/types";
import {errorHandling} from "../error";

interface ISentEmail {
    type: typeof SENT_EMAIL;
}

interface ISentEmailSuccess {
    type: typeof SENT_EMAIL_SUCCESS;
}

interface ISentEmailFailed {
    type: typeof SENT_EMAIL_FAILED;
}

export type TForgotPasswordAction =
    ISentEmail
    | ISentEmailSuccess
    | ISentEmailFailed;

export function forgotPassword( email:string) {
    return function (dispatch:AppDispatch) {
        dispatch({
            type: SENT_EMAIL
        });
        fetch(`${_QUERY}password-reset`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({

                email: email

            })
        })
            .then(errorHandling)
            .then(res => {
                dispatch({
                    type:SENT_EMAIL_SUCCESS,



                }); console.log(res)
                // setTokens(res.accessToken, res.refreshToken)
            })
            .catch(err => {

                dispatch({
                    type: SENT_EMAIL_FAILED
                })

            })
    }
}
