import React, { Fragment } from "react";

import ProductContainer from "./../../containers/ProductContainer";
import CartContainer from "./../../containers/CartContainer";
import CartTotal from "./../../components/StorePage/CartTotal/CartTotal";
import "./StorePage.scss";

class StorePage extends React.Component {
  render() {
    return (
      <Fragment>
        {/* <!-- Menu --> */}
        <div className="product-action">
          {/* <!-- Cart --> */}
          <div className="cart__products">
            <h2>CART</h2>
            {/* <!-- Product-list --> */}
            <CartContainer></CartContainer>
            <div className="cart__total">
              <CartTotal></CartTotal>
            </div>
          </div>
        </div>

        {/* <!-- products-container --> */}
        <div className="products-container">
          <div className="products__wrapper">
            <ProductContainer></ProductContainer>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default StorePage;
