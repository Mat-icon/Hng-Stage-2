import React from "react";
import ProductsPage from "../(components)/ProductsPage";
import ProductList from "../(components)/ProductsList";
import Footer from "../(components)/Footer";

const page = () => {
  return (
    <div>
      <ProductsPage />
      <ProductList/>
      <Footer/>
    </div>
  );
};

export default page;
