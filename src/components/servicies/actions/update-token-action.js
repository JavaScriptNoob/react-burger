import {GET_USER_FAILED, GET_USER_REQUEST, GET_USER_SUCCESS} from "../reducers/index-reducer";
import {_QUERY, errorHandling} from "../api";
import {fetchWithRefresh, getCookie, setToken} from "../jwt";

export function getUser() {
    return function (dispatch) {
        dispatch({
            type: GET_USER_REQUEST,
        });
        console.log("getuser beginning" )
        fetchWithRefresh(`${_QUERY}auth/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                authorization: getCookie('access')
            }
        })
            // .then(
            //     (res) => {
            //         console.log(res,'refresh')
            //         return res.json();
            //
            //     }
            // )
            .then((res) => {


                if (res.success) {
                    console.log(res,"sucess get user")
                    dispatch({
                        type: GET_USER_SUCCESS,
                        user: res.user,
                    });
                }
            })
            .catch((err) => {
                console.log(err)
                dispatch({
                    type: GET_USER_FAILED,
                    payload: err.message,
                });
            });
    }
};
// export const refreshToken = (afterRefresh) => (dispatch) => {
//     fetch(`${_QUERY}auth/token`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify({
//             token: localStorage.getItem('refresh')
//         })
//     })
//         .then(errorHandling)
//         .then((res) => {
//             setToken(res.accessToken, res.refreshToken);
//             dispatch(afterRefresh());
//         })
//         .catch(err => console.log(err))
// }


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