import React from "react";

import "./ProductItem.scss";

class ProductItem extends React.Component {
  onAddToCart = product => {
    this.props.onAddToCart(product);
  };

  render() {
    let { product } = this.props;
    return (
      <div className="product__card">
        <div className="product__item">
          <img src={product.image} />
          <p>{product.name}</p>
          <span className="cart__price">$ {product.price}</span>
          <button
            onClick={() => this.onAddToCart(product)}
            className="product__btn"
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
