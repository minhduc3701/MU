import React, { Fragment } from "react";
import { connect } from "react-redux";

import * as Actions from "./../../../actions/ActionType";

import "./CartTotal.scss";

class CartTotal extends React.Component {
  showTotalAmount = carts => {
    let total = 0;
    if (carts.length > 0) {
      for (let i = 0; i < carts.length; i++) {
        total += carts[i].product.price * carts[i].quantity;
      }
    }
    return total;
  };

  showAlert = totalAmount => {
    alert(`Checkout - Total: $ ${totalAmount}`);
    this.props.onResetCart();
  };

  render() {
    let { carts } = this.props;
    let totalAmount = this.showTotalAmount(carts);
    return (
      <Fragment>
        <div className="total">
          <p>TOTAL</p>
          <p className="cart__price">$ {totalAmount} </p>
        </div>
        <button
          onClick={() => this.showAlert(totalAmount)}
          className="cart__btn"
        >
          CHECKOUT
        </button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    carts: state.carts
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onResetCart: () => {
      dispatch(Actions.actResetCart());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartTotal);
