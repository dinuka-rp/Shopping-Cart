import React from "react";
import Product from "./Product";
import { IProduct } from "../types/Product";

// pass in this information from Home to Catalog (Information will be received from the backend)

interface Props {
  salesProducts?: [IProduct] | null;
}

// have a separate home page | use this to create the grid of item cards
const ProductGrid: React.FC<Props> = (props: Props) => {
  return (
    <>
      <section>
        {/* display a grid with SalesItem cards */}

        {/* map object received from backend api which contains all the details about all the products into multiple cards here */}
        {props.salesProducts &&
          props.salesProducts.map((item) => (
            <Product
              item={item}
              addItemToCart={() => {
                console.log("Item was added to cart");
                // add to redux state from here (pass it the itemId of this into another function?)
              }}
            />
          ))}
      </section>
    </>
  );
};

export default ProductGrid;
