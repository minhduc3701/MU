import React, { Fragment } from "react";
import { connect } from "react-redux";

import Products from "./../components/StorePage/Product/Products/Products";
import ProductItem from "./../components/StorePage/Product/ProductItem/ProductItem";
import * as Actions from "./../actions/ActionType";
import ProductHeader from "../components/StorePage/Product/ProductHeader/ProductHeader";
import products from "../reducers/products";

class ProductContainer extends React.Component {
  componentDidMount = () => {
    this.props.fetchAllProducts();
  };

  showProduct = products => {
    let result = null;
    let { onAddToCart } = this.props;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            onAddToCart={onAddToCart}
            product={product}
          ></ProductItem>
        );
      });
    }
    return result;
  };

  render() {
    let { products } = this.props;
    return (
      <Fragment>
        <ProductHeader products={products}></ProductHeader>
        <Products>{this.showProduct(products)}</Products>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(Actions.actShowProduct(products));
    },
    onAddToCart: product => {
      dispatch(Actions.actAddToCart(product, 1));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);
