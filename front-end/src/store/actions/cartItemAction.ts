import { IProduct } from "../../types/Product";

export const addItem = (item: IProduct) => {
  return {
    type: "ADD",
    payload: item,
  };
};

// remove entire quantity of items saved in 
export const removeItem = (item: IProduct) => {
  return {
    type: "REMOVE",
    payload: {item},
  };
};
