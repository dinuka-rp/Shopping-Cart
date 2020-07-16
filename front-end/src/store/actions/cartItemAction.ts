import { IProduct } from "../../types/Product";

// export type ItemAction = addItem;

export const addItem = (item: IProduct) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

// remove entire quantity of items saved in
export const removeItem = (item: IProduct) => {
  return {
    type: "REMOVE_ITEM",
    payload: item,
  };
};

// reduce quantity of an item
export const reduceQuantity = (item: IProduct) => {
  return {
    type: "REDUCE_QUANTITY",
    payload: item,
  };
};