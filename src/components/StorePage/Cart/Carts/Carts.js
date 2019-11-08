import React from "react";

import CartItem from "./../CartItem/CartItem";
import "./Carts.scss";

class Carts extends React.Component {
  render() {
    return <div className="cart__list">{this.props.children}</div>;
  }
}

export default Carts;
