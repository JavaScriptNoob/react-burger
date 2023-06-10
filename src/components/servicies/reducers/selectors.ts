import {RootState} from "../../../index";

export const selectorBun = (state:RootState)=>  state.currentList.bun;
export const selectorCurrentConstructorList = (state:RootState)=>  state.currentList.currentConstructorList;
export const selectorModal = (state:RootState)=>  state.modal.openModal;
export const selectorOrderNunmber= (state:RootState)=>  state.orderNumber.orderNumber;
export const selectorProducts = (state:RootState)=>  state.productsData.orders;
export  const selectorCurrentList =(state:RootState)=>state.currentList
export const selectorModalIngredients=(state:RootState)=>state.ingredientModal.ingredientsModal
export const selectorCurrentIngredient=(state:RootState)=>state.ingredientModal.currentIngredient
export const selectorUser=(state:RootState)=>state.user
export const selectorforgot=(state:RootState)=>state.forgottenPassword()
