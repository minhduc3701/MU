import React from "react";
import { connect } from "react-redux";

import Carts from "./../components/StorePage/Cart/Carts/Carts";
import CartItem from "./../components/StorePage/Cart/CartItem/CartItem";

class CartContainer extends React.Component {
  showCartItem = carts => {
    let result = <h4>EMPTY</h4>;
    if (carts.length > 0) {
      result = carts.map((cart, index) => {
        return <CartItem key={index} cart={cart}></CartItem>;
      });
    }
    return result;
  };

  render() {
    let { carts } = this.props;
    return <Carts>{this.showCartItem(carts)}</Carts>;
  }
}

const mapStateToProps = state => {
  return {
    carts: state.carts
  };
};

export default connect(
  mapStateToProps,
  null
)(CartContainer);
