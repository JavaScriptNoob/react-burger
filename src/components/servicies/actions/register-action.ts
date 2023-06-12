import {REGISTER_REQUEST_FAILED, REGISTER_REQUEST_SUCCESS, REGISTER_USER_REQUEST} from "../reducers/index-reducer";
import {_QUERY} from "../api";
import {errorHandling} from "../error";
import {setToken} from "../jwt";
import {AppDispatch} from "../../utils/types";
import {Simulate} from "react-dom/test-utils";
import {IUser} from "../../utils/types";


export interface IRegisterRequestFailed{
readonly  type: typeof REGISTER_REQUEST_FAILED;
err:Error

}
export interface IRegisterRequestSuccess{
    readonly  type: typeof REGISTER_REQUEST_SUCCESS;
    response:any[];
    user: IUser[],
    token: string,
    email:string,
    name: string
}
export interface IRegisterUserRequest{
    readonly type: typeof REGISTER_USER_REQUEST;

}
export type TAuthRegistrationActions =
    | IRegisterRequestFailed
    | IRegisterRequestSuccess
    | IRegisterUserRequest;


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
            .catch((err:Error) => {

                dispatch({
                    type: REGISTER_REQUEST_FAILED,
                    err: err
                })
            })
    }
}
