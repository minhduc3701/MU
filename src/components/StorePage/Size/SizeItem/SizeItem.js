import React, { Fragment } from "react";
import "./SizeItem.scss";

class SizeItem extends React.Component {
  render() {
    return (
      <Fragment>
        <label className="size__check">
          <input className="input" type="checkbox" value="XXS" />
          <span className="checkmark">XXS</span>
        </label>
      </Fragment>
    );
  }
}

export default SizeItem;
