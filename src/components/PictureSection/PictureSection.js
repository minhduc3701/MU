import React from "react";

import img1 from "./img/EHVXbMcWwAAWoIl.jpg";
import "./PictureSection.scss";

class PictureSection extends React.Component {
  render() {
    return (
      <section className="pick">
        <img src={img1} alt="" />
      </section>
    );
  }
}

export default PictureSection;
