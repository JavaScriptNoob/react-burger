import {SENT_EMAIL, SENT_EMAIL_FAILED, SENT_EMAIL_SUCCESS} from "./index-reducer";

const initialState = {

    forgoPasswordRequest: false,
    forgotPasswordSuccess: false,
    forgotPasswordFailed: false
}

export const forgotPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        case SENT_EMAIL:
            return {
                ...state,
                forgotPasswordRequest: true,
            }
        case SENT_EMAIL_SUCCESS:
            return {
                ...state,
                forgotPasswordSuccess: true,
                forgotPasswordRequest: false
            }
        case SENT_EMAIL_FAILED:
            return {
                ...state,
                forgotPasswordSuccess:false,
                forgotPasswordRequest: false,
                forgotPasswordFailed: true
            }

        default:
            return state
    }

}