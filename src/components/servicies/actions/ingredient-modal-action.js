import {OPEN_INGREDIENTS_POP_UP,CLOSE_INGREDIENTS_POP_UP} from "../reducers/index-reducer";

export const closePopUp = () => {
    return function (dispatch) {
        dispatch({
            type: CLOSE_INGREDIENTS_POP_UP,

        });
    }}
export const openPopUp=()=>{
    return function(dispatch){
        dispatch({
            type:OPEN_INGREDIENTS_POP_UP,


        })

    }
}