import {RootState} from "./index-reducer";
import {IItem, IUser} from "../../utils/types";



export const selectorBun = (state:RootState)=>  state.currentList.bun;
export const selectorCurrentConstructorList = (state:RootState):IItem[]=>  state.currentList.currentConstructorList;
export const selectorModal = (state:RootState)=>  state.modal.openModal;

export const selectorProducts = (state:RootState):IItem[] =>  state.productsData.orders;
export  const selectorCurrentList =(state:RootState)=>state.currentList
export const selectorModalIngredients=(state:RootState)=>state.ingredientModal.ingredientsModal

export const selectorUser=(state:RootState):IUser =>state.user

