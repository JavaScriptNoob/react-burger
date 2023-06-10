import {CLOSE_MODAL, OPEN_MODAL} from "./index-reducer";
import {TModalViewActionTypes} from "../../utils/action-types";
const initialState={
    openModal:false
}
export const modalViewReducer = (state = initialState, action:TModalViewActionTypes) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                openModal: true
            }



        case CLOSE_MODAL:
            return {
                ...state,
                openModal: false
            }
        default:
            return state
    }
}
