import React from "react";

class ProductHeader extends React.Component {
  sortProducts = value => {
    return console.log(value);
  };

  render() {
    let { products } = this.props;
    return (
      <div className="products__header">
        <small className="products__found">
          {products.length} Product(s) found.
        </small>
        {/* <div className="products__sort">
          Order by: <span> </span>
          <select>
            <option onChange={this.sortProducts("")} value="">
              Select
            </option>
            <option
              value="lowestprice"
              onChange={this.sortProducts("lowestprice")}
            >
              Lowest to highest
            </option>
            <option
              value="highestprice"
              onChange={this.sortProducts("highestprice")}
            >
              Highest to lowest
            </option>
          </select>
        </div> */}
      </div>
    );
  }
}

export default ProductHeader;
