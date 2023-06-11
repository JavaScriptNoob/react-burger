import {LOGIN_REQUEST_FAILED, LOGIN_REQUEST_SUCCESS, LOGIN_USER_REQUEST} from "../reducers/index-reducer";
import {_QUERY} from "../api";
import {errorHandling} from "../error";
import {setToken} from "../jwt";
import {AppDispatch} from "../../../index";

export interface IToken {

        accessToken: string;
        refreshToken: string;
        user:{
            email:string;
            name: string;
        }

}
interface ILoginRequestFailed {
    type: typeof LOGIN_REQUEST_FAILED;
}

interface ILoginRequestSuccess {
    type: typeof LOGIN_REQUEST_SUCCESS;
    response: IToken;
    token: string;
    email: string;
    name: string;
}

interface ILoginUserRequest {
    type: typeof LOGIN_USER_REQUEST;
}

export type TLoginUserAction =
    ILoginRequestFailed
    | ILoginRequestSuccess
    | ILoginUserRequest;
export function login(email:string, password:string) {
    return function (dispatch:AppDispatch) {
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
            .then()
            .then(res => {
                dispatch({
                    type:LOGIN_REQUEST_SUCCESS,
                    response:res
                });
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
