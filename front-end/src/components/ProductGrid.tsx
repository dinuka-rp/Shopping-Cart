import React from "react";
import Product from "./Product";
import { IProduct } from "../types/Product";
import { useDispatch } from "react-redux";
import { addItem } from "../store/actions/cartItemAction";
// pass in this information from Home to Catalog (Information will be received from the backend)

interface Props {
  salesProducts?: [IProduct] | null;
}

//  create the grid of products
const ProductGrid: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch(); // used to update redux store state

  const addItemToReduxStore = (item: IProduct) => {
    // add to redux state from here

    dispatch(addItem(item));    // add new item to cart

    // console.log("Item was added to cart.");
    // console.log({ item });
  };

  return (
    <section style={{ width: "90%", textAlign: "center", margin: "auto" }}>
      {props.salesProducts &&
        props.salesProducts.map((item) => (
          <Product
            key={item.itemId}
            item={item}
            addItemToCart={() => {
              addItemToReduxStore(item);
            }}
          />
        ))}
    </section>
  );
};

export default ProductGrid;
