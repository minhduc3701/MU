import React from "react";

import "./CartItem.scss";
import img1 from "./51Es1j6oobL._AC_SX425_.jpg";

class CartItem extends React.Component {
  render() {
    return (
      <div className="cart__item">
        <div className="cart__info">
          <img src={img1} alt="" />
          <p>M | Front print and paisley print Quantity: 1</p>
        </div>
        <p className="cart__price">102$</p>
      </div>
    );
  }
}

export default CartItem;
