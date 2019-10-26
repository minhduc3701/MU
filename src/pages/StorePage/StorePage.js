import React, { Fragment } from "react";

import Sizes from "./../../components/StorePage/Size/Sizes/Sizes";
import Products from "./../../components/StorePage/Product/Products/Products";
import Carts from "./../../components/StorePage/Cart/Carts/Carts";
import CartTotal from "./../../components/StorePage/CartTotal/CartTotal";
import "./StorePage.scss";

class StorePage extends React.Component {
  render() {
    return (
      <Fragment>
        {/* <!-- Menu --> */}
        <div className="product-action">
          {/* <!-- Size --> */}
          <div className="size__container">
            <h2>SIZES</h2>
            <Sizes></Sizes>
          </div>

          {/* <!-- Cart --> */}
          <div className="cart__products">
            <h2>CART</h2>
            {/* <!-- Product-list --> */}
            <Carts></Carts>
            <div className="cart__total">
              <CartTotal></CartTotal>
              <button className="cart__btn">CHECKOUT</button>
            </div>
          </div>
        </div>

        {/* <!-- products-container --> */}
        <div className="products-container">
          <div className="products__wrapper">
            <div className="products__header">
              <small className="products__found">16 Product(s) found.</small>
              <div className="products__sort">
                Order by:
                <select>
                  <option value>Select</option>
                  <option value="lowestprice">Lowest to highest</option>
                  <option value="highestprice">Highest to lowest</option>
                </select>
              </div>
            </div>
            <Products></Products>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default StorePage;
