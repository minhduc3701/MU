import React from "react";

import "./CartTotal.scss";

class CartTotal extends React.Component {
  render() {
    return (
      <div className="total">
        <p>TOTAL</p>
        <p className="cart__price">102$</p>
      </div>
    );
  }
}

export default CartTotal;
