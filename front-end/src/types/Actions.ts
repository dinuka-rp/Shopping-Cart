import { IProduct } from "./Product";

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const ALTER_QUANTITY = "ALTER_QUANTITY";

export interface addItemAction {
  type: typeof ADD_ITEM;
  payload: IProduct;
}

export interface removeItemAction {
  type: typeof REMOVE_ITEM;
  payload: IProduct;
}

export interface alterQuantityAction {
  type: typeof ALTER_QUANTITY;
  payload: { product: IProduct; quantity: number };
}

export type CartItemsActionTypes =
  | addItemAction
  | removeItemAction
  | alterQuantityAction;
