
import {
    SENT_EMAIL, SENT_EMAIL_FAILED, SENT_EMAIL_SUCCESS
} from "../reducers/index-reducer";
import {_QUERY, errorHandling} from "../api";

export function forgotPassword( email) {
    return function (dispatch) {
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
                    type: SENT_EMAIL_FAILED,

                })
                console.log(err)
            })
    }
}