import React from "react";
import ProductDetails from "../features/product/components/ProductDetail";
import Navbar from "../features/navbar/Navbar";

const ProductDetailPage = () => {
  return (
    <Navbar>
      <ProductDetails></ProductDetails>
    </Navbar>
  );
};

export default ProductDetailPage;
