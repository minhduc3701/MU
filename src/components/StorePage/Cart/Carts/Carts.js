import React from "react";

import CartItem from "./../CartItem/CartItem";
import "./Carts.scss";

class Carts extends React.Component {
  render() {
    return (
      <div className="cart__list">
        <CartItem></CartItem>
      </div>
    );
  }
}

export default Carts;
