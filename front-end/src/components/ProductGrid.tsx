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
    dispatch(addItem(item,1)); // add new item to cart

    // if item already exists, change quantity of item instead of just adding the item again (call different method from Redux store)
  };

  return (
    <section style={{ width: "90%", textAlign: "center", margin: "auto" }}>
      {props.salesProducts &&
        props.salesProducts.map((item) => (
          <>
            <Product
              key={item.itemId}
              item={item}
              addItemToCart={() => {
                addItemToReduxStore(item);
              }}
            />
          </>
        ))}
    </section>
  );
};

export default ProductGrid;
