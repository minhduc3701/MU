import React, { Fragment } from "react";

import ProductItem from "./../ProductItem/ProductItem";
import "./Products.scss";

class Products extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="products__list">
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
        </div>
      </Fragment>
    );
  }
}

export default Products;
