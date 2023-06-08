import {OPEN_INGREDIENTS_POP_UP,CLOSE_INGREDIENTS_POP_UP} from "../reducers/index-reducer";
import {AppDispatch} from "../../../index";
import {IItem} from "../../utils/types";

export const closePopUp = () => {
    return function (dispatch:AppDispatch) {
        dispatch({
            type: CLOSE_INGREDIENTS_POP_UP,

        });
    }}
export const openPopUp=(data:IItem)=>{
    return function(dispatch:AppDispatch){
        dispatch({
            type:OPEN_INGREDIENTS_POP_UP,
            payload:data


        })
        dispatch({
            type:OPEN_INGREDIENTS_POP_UP,
            payload:data


        })

    }
}
