import React, { Fragment } from "react";

import "./ProductItem.scss";
import img1 from "./51Es1j6oobL._AC_SX425_.jpg";

class ProductItem extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="product__item">
          <img src={img1} />
          <p>main KIT 2019/20</p>
          <span className="cart__price">102$</span>
          <button className="product__btn">Add to cart</button>
        </div>
      </Fragment>
    );
  }
}

export default ProductItem;