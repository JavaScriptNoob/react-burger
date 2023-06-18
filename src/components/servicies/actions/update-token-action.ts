import {GET_USER_FAILED, GET_USER_REQUEST, GET_USER_SUCCESS, REGISTER_USER_REQUEST} from "../reducers/index-reducer";
import {_QUERY} from "../api";
import {fetchWithRefresh, getCookie, setToken} from "../jwt";
import {AppDispatch} from "../../utils/types";
import {errorHandling} from "../error";

export interface IUserSuccess{

    email: string;
    name: string;
}
export interface IGetUserFailed{
    readonly type: typeof GET_USER_FAILED;

}
export interface IGetUserRequest{
    readonly type: typeof GET_USER_REQUEST;



}
export interface IGetUserSuccess{
    readonly type: typeof GET_USER_SUCCESS;
    user:  IUserSuccess;
}

export type TGetUserActions =
    | IGetUserFailed
    | IGetUserRequest
    | IGetUserSuccess;




export function getUser() {
    return function (dispatch:AppDispatch) {
        dispatch({
            type: GET_USER_REQUEST,
        });
        console.log("getuser beginning");
        fetchWithRefresh(`${_QUERY}auth/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                authorization: getCookie('access'),
            },
        })
            .then((res) => {
                if (res.success) {
                    console.log(res, "sucess get user");
                    dispatch({
                        type: GET_USER_SUCCESS,
                        user: res.user,
                    });
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: GET_USER_FAILED,
                    payload: err.message,
                });
            });
    };
}


export const refreshToken = () => {
    return fetch(`${_QUERY}auth/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            token: localStorage.getItem("refresh"),
        }),
    }).then(errorHandling)
};
