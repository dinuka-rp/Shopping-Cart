import React from "react";
import Header from "./Header";
import SaleItemCard from "./SaleItemCard";

// pass in this information from Home to Catalog (Information will be received from the backend)
interface SalesItem {
  img?: string | null;
  // title: string;
  // price: number;
  rating?: number;
}

interface Props {
  salesItems: SalesItem
}


// have a separate home page | use this to create the grid of item cards
const Catalog: React.FC<Props> = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <section>
        {/* display a grid with SalesItem cards */}

        {/* map object received from backend api which contains all the details about all the prodcuts into multiple cards here */}
        <SaleItemCard />
      </section>

    </>
  );
};

export default Catalog;
