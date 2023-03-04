import {
    ADD_BUN,
    ADD_ITEM_TO_CURRENT_LIST, CLEAR_CURRENT_LIST,
    DECREMENT_CURRENT_CONSTRUCTOR_LIST,
    DRAG_INSIDE_CONTAINER
} from "../reducers/index-reducer";
const initialState ={

    currentConstructorList:[],
    bun:{}

}

export const burgerConstructorReducer = (state = initialState, action)=>{
    switch (action.type){

        case DECREMENT_CURRENT_CONSTRUCTOR_LIST:
            return{
                ...state,
                currentConstructorList: action.payload
            }
        case DRAG_INSIDE_CONTAINER: {
            return {
                ...state,
                currentConstructorList: action.afterDrag
            }
        }
        case ADD_ITEM_TO_CURRENT_LIST:
            return{
                ...state,
                currentConstructorList: state.currentConstructorList.concat(action.payload),


            }
        case ADD_BUN:
            return{
                ...state,
                bun: action.payload,



            }
        case CLEAR_CURRENT_LIST:
            return{
                ...state,
                bun: {},
                currentConstructorList: [],


            }

        default:
            return state



    }


}