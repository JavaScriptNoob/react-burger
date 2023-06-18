import {CLOSE_MODAL, OPEN_MODAL} from "./index-reducer";
import { TModalStatus} from "../actions/order-actions";

interface IModalViewState {
    openModal: boolean;
}

const initialState :IModalViewState={
    openModal:false
}
export const modalViewReducer = (state:IModalViewState = initialState, action:TModalStatus ) => {
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
