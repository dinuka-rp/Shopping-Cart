import React from "react";
import Product from "./Product";
import { IProduct, ICartItem } from "../types/Product";
import { useDispatch, useSelector } from "react-redux";
import { addItem, alterQuantity } from "../store/actions/CartItemAction";
import { ReduxState } from "../store/reducers";

// pass in this information from Home to Catalog (Information will be received from the backend)

interface Props {
  salesProducts?: IProduct[] | null;
}

//  create the grid of products
const ProductGrid: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch(); // used to update redux store state
  let cart: any = useSelector((state: ReduxState) => state.cart); // get entire cart object saved in Redux state

  const addItemToReduxStore = (product: IProduct) => {
    // add to redux state from here

    let cartItems = cart.cartItems;
    // filter cartItems[] by product and get the item with quantity(if it exists)
    let alteredItem = cartItems.find(
      (item: ICartItem) => item.product.id === product.id
    );

    if (!cartItems.includes(alteredItem)) {
      // if item doesn't exists in Redux store cart
      dispatch(addItem(product)); // add new item to cart
    } else {
      // if item already exists, change quantity of item instead of just adding the item again
      let itemQuantity: number = alteredItem.quantity;
      dispatch(alterQuantity(product, itemQuantity + 1));
    }
  };

  return (
    <section style={{ width: "90%", textAlign: "center", margin: "auto" }}>
      {/* {props.salesProducts && console.log(props.salesProducts)} */}
      {props.salesProducts &&
        props.salesProducts.map((item) => (
          <>
            <Product
              key={item.id}
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
