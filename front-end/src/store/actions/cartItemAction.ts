import { IProduct } from "../../types/Product";

// export type ItemAction = addItem;

export const addItem = (product: IProduct) => {
  return {
    type: "ADD_ITEM",
    payload: { product: product, quantity: 1 },
  };
};

// remove entire quantity of items saved in
export const removeItem = (product: IProduct) => {
  return {
    type: "REMOVE_ITEM",
    payload: product,
  };
};

// alter quantity of an item
export const alterQuantity = (product: IProduct, quant: number) => {
  return {
    type: "ALTER_QUANTITY",
    payload: { product: product, quantity: quant },
  };
};
