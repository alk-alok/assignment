import React from "react";
import "./ProductsResult.scss";
import ProductItem from "./ProductItems";

const ProductsResults = ({ products }) => {
  return (
    <>
      {products.length <= 0 ? (
        <div className="no_results">No Results Found !!!</div>
      ) : (
        <div className="product_results_container">
          {products.map((product, i) => {
            return <ProductItem key={i} product={product} />;
          })}
        </div>
      )}
    </>
  );
};

export default ProductsResults;
