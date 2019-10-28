import React from "react";

import "./ProductItem.scss";
import img1 from "./mufc-251561.jpg";

class ProductItem extends React.Component {
  render() {
    return (
      <div className="product__card">
        <div className="product__item">
          <img src={img1} />
          <p>main KIT 2019/20</p>
          <span className="cart__price">102$</span>
          <button className="product__btn">Add to cart</button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
