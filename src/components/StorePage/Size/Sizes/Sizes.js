import React from "react";

import SizeItem from "./../SizeItem/SizeItem";
import "./Sizes.scss";

class Sizes extends React.Component {
  render() {
    return (
      <div className="size__wrapper">
        <SizeItem></SizeItem>
      </div>
    );
  }
}

export default Sizes;
