import React, { Fragment } from "react";
import "./SizeItem.scss";

class SizeItem extends React.Component {
  render() {
    let { size } = this.props;
    return (
      <Fragment>
        <label className="size__check">
          <input className="input" type="checkbox" value={size} />
          <span className="checkmark">{size}</span>
        </label>
      </Fragment>
    );
  }
}

export default SizeItem;
