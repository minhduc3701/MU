import React from "react";

import "./ProductItem.scss";

class ProductItem extends React.Component {
  render() {
    let { product } = this.props;
    return (
      <div className="product__card">
        <div className="product__item">
          <img src={product.image} />
          <p>{product.name}</p>
          <span className="cart__price">$ {product.price}</span>
          <button className="product__btn">Add to cart</button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
