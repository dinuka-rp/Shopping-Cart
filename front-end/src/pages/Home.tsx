import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import { retrieveProducts } from "../services/ProductsManagement";

const Home: React.FC = () => {
  const [allProducts, setAllProducts] = useState(null);

  useEffect(() => {
    retrieveProducts().then((products) => setAllProducts(products));
  }, []);

  return (
    <>
      <Header />

      {console.log(allProducts)}
      <ProductGrid salesProducts={allProducts} />
    </>
  );
};

export default Home;
