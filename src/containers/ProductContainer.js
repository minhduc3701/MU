import React from "react";
import { connect } from "react-redux";

import Products from "./../components/StorePage/Product/Products/Products";
import ProductItem from "./../components/StorePage/Product/ProductItem/ProductItem";
import * as Actions from "./../actions/ActionType";

class ProductContainer extends React.Component {
  componentDidMount = () => {
    this.props.fetchAllProducts();
  };

  showProduct = products => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product}></ProductItem>;
      });
    }
    return result;
  };

  render() {
    let { products } = this.props;
    return <Products>{this.showProduct(products)}</Products>;
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
      dispatch(Actions.actFetchActionRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);
