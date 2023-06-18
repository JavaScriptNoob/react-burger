import { TypedUseSelectorHook, useDispatch as dispatchHook, useSelector as selectorHook } from 'react-redux'
import type { RootState, } from '../../../index'
import {AppDispatch} from "../../utils/types";

// Use throughout your app instead of plain `useDispatch` and `useSelector`

export const useDispatch = () => dispatchHook<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
