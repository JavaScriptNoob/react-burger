import {OPEN_INGREDIENTS_POP_UP,CLOSE_INGREDIENTS_POP_UP} from "../reducers/index-reducer";
import {AppDispatch} from "../../../index";
import {IItem} from "../../utils/types";
interface ICloseIngredientsPopUp {
    type: typeof CLOSE_INGREDIENTS_POP_UP;
}

interface IOpenIngredientsPopUp {
    type: typeof OPEN_INGREDIENTS_POP_UP;
    payload: IItem;
}

export type TIngredientsPopUpAction = ICloseIngredientsPopUp | IOpenIngredientsPopUp;

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
