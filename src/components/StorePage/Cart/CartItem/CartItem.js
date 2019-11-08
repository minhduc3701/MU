import React from "react";

import "./CartItem.scss";

class CartItem extends React.Component {
  showSubTotal = (price, quantity) => {
    return price * quantity;
  };

  onUpdateCart = (product, quantity) => {
    this.props.onUpdateCart(product, quantity);
  };

  onDeleteCartItem = product => {
    this.props.onDeleteCartItem(product);
  };

  render() {
    let { cart } = this.props;
    let { quantity } = cart;
    let disabled = quantity === 1 ? true : false;
    return (
      <div className="cart__item">
        <div className="cart__info">
          <img src={cart.product.image} alt="" />
          <div>
            {cart.product.name} | M
            <p>
              Quantity: <span>{quantity}</span>
            </p>
          </div>
        </div>
        <div className="cart__action">
          <p className="cart__price">
            $ {this.showSubTotal(cart.product.price, quantity)}
          </p>
          <div className="btn__group">
            <button
              onClick={() => this.onUpdateCart(cart.product, quantity - 1)}
              className="btn__change"
              type="button"
              disabled={disabled}
            >
              -
            </button>
            <button
              onClick={() => this.onUpdateCart(cart.product, quantity + 1)}
              className="btn__change"
              type="button"
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={() => this.onDeleteCartItem(cart.product)}
          type="button"
          className="close"
        >
          X
        </button>
      </div>
    );
  }
}

export default CartItem;
