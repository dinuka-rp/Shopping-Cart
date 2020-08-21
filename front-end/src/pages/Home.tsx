import React, { useState, useEffect } from "react";
import HeaderArea from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import { retrieveProducts } from "../services/ProductsManagement";
import { IProduct } from "../types/Product";
import { Pagination } from "antd";

const Home: React.FC = () => {
  const [allProducts, setAllProducts] = useState<IProduct[]>();
  const [searchResults, setSearchResults] = useState<IProduct[]>();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const search = (searchTerm: string) => {
    const results = allProducts?.filter((salesitem: IProduct) =>
      salesitem.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
    setSearchResults(results);
  };

  useEffect(() => {
    retrieveProducts(currentPage).then((products) => {
      setAllProducts(products);
      setSearchResults(products);
    });
  }, [currentPage]);

  const onPageChange = (page: number) => {
    // console.log(page);
    setCurrentPage(page);
    
    retrieveProducts(page).then((products) => {
      setAllProducts(products);
      setSearchResults(products);
    });
  };

  return (
    <>
      <HeaderArea search={search} chosenTab="1" />

      <ProductGrid salesProducts={searchResults} />

      <div style={{ textAlign: "center", marginTop:"20px" }}>
        <Pagination current={currentPage} onChange={onPageChange} total={50} />
      </div>
    </>
  );
};

export default Home;
