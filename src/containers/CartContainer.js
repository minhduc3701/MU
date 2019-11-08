import React, { Fragment } from "react";
import { connect } from "react-redux";

import Carts from "./../components/StorePage/Cart/Carts/Carts";
import CartItem from "./../components/StorePage/Cart/CartItem/CartItem";
import CartTotal from "./../components/StorePage/CartTotal/CartTotal";
import * as Actions from "./../actions/ActionType";

class CartContainer extends React.Component {
  showCartItem = carts => {
    let result = <h4>EMPTY</h4>;
    let { onUpdateCart, onDeleteCartItem } = this.props;
    if (carts.length > 0) {
      result = carts.map((cart, index) => {
        return (
          <CartItem
            onUpdateCart={onUpdateCart}
            key={index}
            cart={cart}
            onDeleteCartItem={onDeleteCartItem}
          ></CartItem>
        );
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateCart: (product, quantity) => {
      dispatch(Actions.actUpdateCart(product, quantity));
    },
    onDeleteCartItem: product => {
      dispatch(Actions.actDeleteCartItem(product));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
