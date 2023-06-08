import {CHANGE_DETAILS_FAILED, CHANGE_DETAILS_REQUEST, CHANGE_DETAILS_SUCCESS} from "../reducers/index-reducer";
import {fetchWithRefresh, getCookie} from "../jwt";
import {getUser, refreshToken} from "./update-token-action";
import {_QUERY} from "../api";
import {AppDispatch} from "../../../index";
import {FormValues} from "../../utils/types";

export function changeUserDetails(values: FormValues) {

    return function (dispatch: AppDispatch) {
        dispatch({
            type: CHANGE_DETAILS_REQUEST,
        });

        fetchWithRefresh(`${_QUERY}auth/user`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: getCookie('access')
            },
            body: JSON.stringify(values)
        })

            .then((res) => {
                if (res.success) {
                    console.log("updateDetails,  if (res.success)", res)
                    dispatch({
                        type: CHANGE_DETAILS_SUCCESS,
                        user: res.user,
                    });
                    dispatch(getUser());

                }
            })
            .catch((err) => {
                console.log("updateDetails,  if (res.failed)", err)
                dispatch({
                    type: CHANGE_DETAILS_FAILED,
                    payload: err.message,
                });
            });
    }
}
