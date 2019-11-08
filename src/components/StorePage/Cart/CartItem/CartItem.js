import React from "react";

import "./CartItem.scss";
import img1 from "./mufc-251561.jpg";
import carts from "../../../../reducers/carts";

class CartItem extends React.Component {
  render() {
    let { cart } = this.props;

    console.log(cart);
    return (
      <div className="cart__item">
        <div className="cart__info">
          <img src={cart.product.image} alt="" />
          <div>
            {cart.product.name} | M<p>Quantity: 1</p>
          </div>
        </div>
        <div className="cart__action">
          <p className="cart__price">$ {cart.product.price}</p>
          <div className="btn__group">
            <button className="btn__change" type="button" disabled>
              -
            </button>
            <button className="btn__change" type="button">
              +
            </button>
          </div>
        </div>
        <button type="button" className="close">
          X
        </button>
      </div>
    );
  }
}

export default CartItem;
