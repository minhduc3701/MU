import React from "react";

import "./Products.scss";

class Products extends React.Component {
  render() {
    return <div className="products__list">{this.props.children}</div>;
  }
}

export default Products;
