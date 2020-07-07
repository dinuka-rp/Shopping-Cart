import React from "react";
import Header from "../components/Header";
import Catalog from "../components/Catalog";
import { retrieveProducts } from "../services/ProductsManagement";

// interface Product {
//   itemId: string;
//   image?: string | undefined;
//   // title: string;
//   // price: number;
//   rating?: number;
// }

// interface Props {
//   salesItems: [Product];
// }

const Home: React.FC = () => {
  // const [allProducts] = retrieveProducts;  //??????????
  return (
    <>
      <Header />
      {/* <Catalog products={allProducts} /> */}
    </>
  );
};

export default Home;
