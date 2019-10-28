import React from "react";

import "./CartItem.scss";
import img1 from "./51Es1j6oobL._AC_SX425_.jpg";

class CartItem extends React.Component {
  render() {
    return (
      <div className="cart__item">
        <div className="cart__info">
          <img src={img1} alt="" />
          <div>
            M | Front print and paisley print
            <p>Quantity: 1</p>
          </div>
        </div>
        <div className="cart__action">
          <p className="cart__price">$ 102</p>
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
