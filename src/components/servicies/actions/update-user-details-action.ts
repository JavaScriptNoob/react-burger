
import {fetchWithRefresh, getCookie} from "../jwt";
import {getUser, IGetUserFailed, IGetUserRequest, IGetUserSuccess, refreshToken} from "./update-token-action";
import {_QUERY} from "../api";
import {AppDispatch} from "../../../index";
import {FormValues, IUser} from "../../utils/types";
import {CHANGE_DETAILS_SUCCESS, CHANGE_DETAILS_FAILED, CHANGE_DETAILS_REQUEST } from "../reducers/index-reducer";

interface IChangeDetailsRequest {
    type: typeof CHANGE_DETAILS_REQUEST;
}

interface IChangeDetailsSuccess {
    type: typeof CHANGE_DETAILS_SUCCESS;
    user: IUser;
}

interface IChangeDetailsFailed {
    type: typeof CHANGE_DETAILS_FAILED;
    payload: string;
}


export type TChangeUserDetailsActions =
    | IChangeDetailsFailed
    | IChangeDetailsSuccess
    | IChangeDetailsRequest;






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
