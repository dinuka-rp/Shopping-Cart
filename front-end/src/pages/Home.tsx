import React, { useState, useEffect } from "react";
import HeaderArea from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import { retrieveProducts } from "../services/ProductsManagement";
import { IProduct } from "../types/Product";

const Home: React.FC = () => {
  const [allProducts, setAllProducts] = useState<IProduct[]>();
  const [searchResults, setSearchResults] = useState<IProduct[]>();

  const search = (searchTerm: string) => {
    const results = allProducts?.filter((salesitem: IProduct) =>
      salesitem.title.toLowerCase().includes(searchTerm.trim())
    );
    setSearchResults(results);
  };

  useEffect(() => {
    retrieveProducts().then((products) => {
      setAllProducts(products);
      setSearchResults(products);
    });
  }, []);

  return (
    <>
      <HeaderArea search={search} chosenTab="1" />

      <ProductGrid salesProducts={searchResults} />
    </>
  );
};

export default Home;
