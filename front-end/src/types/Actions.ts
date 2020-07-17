import { IProduct } from "./Product";

export const ADD_ITEM = "ADD_ITEM"
export const REMOVE_ITEM = "REMOVE_ITEM"
export const REDUCE_QUANTITY = "REDUCE_QUANTITY"

export interface addItemAction{
    type: typeof ADD_ITEM;
    payload: IProduct;
}

export interface removeItemAction{
    type: typeof REMOVE_ITEM;
    payload: IProduct;
}

export interface reduceQuantityAction{
    type: typeof REDUCE_QUANTITY;
    payload: IProduct;
}

export type CartItemsActionTypes = addItemAction|removeItemAction|reduceQuantityAction