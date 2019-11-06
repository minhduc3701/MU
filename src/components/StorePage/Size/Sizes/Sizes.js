import React from "react";

import SizeItem from "./../SizeItem/SizeItem";
import "./Sizes.scss";

let sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

class Sizes extends React.Component {
  showSizes = sizes => {
    let result = null;
    if (sizes.length > 0) {
      result = sizes.map((size, index) => {
        return <SizeItem key={index} size={size}></SizeItem>;
      });
    }
    return result;
  };

  render() {
    return <div className="size__wrapper">{this.showSizes(sizes)}</div>;
  }
}

export default Sizes;
