import React from "react";
import Header from "./Header";
import SaleItemCard from "./SaleItemCard";

// pass in this information from Home to Catalog (Information will be received from the backend)
interface SalesItem {
  itemId: string;
  image?: string | undefined;
  // title: string;
  // price: number;
  rating?: number;
}

interface Props {
  salesItems: [SalesItem];
}

// have a separate home page | use this to create the grid of item cards
const Catalog: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div>
        <Header />
      </div>

      <section>
        {/* display a grid with SalesItem cards */}

        {/* map object received from backend api which contains all the details about all the prodcuts into multiple cards here */}
        {/* {props.salesItems.map((item) => ( */}

          <SaleItemCard
            // itemId={item.itemId}
            image={"https://os.alipayobjects.com/rmsportal/UXamdIxYSkXfoVo.jpg"}
            title={"Product Title"}
            price={4000.5}
            rating={4}
            addItemToCart={() => {
              console.log("Item was added to cart");
              // add to redux state from here (pass it the itemId of this into another function?)
            }}
          />
          
        {/* ))} */}
      </section>
    </>
  );
};

export default Catalog;
