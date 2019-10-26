import React from "react";

import img_1 from "./img/EHVcimuWwAEP2FU.jpg";
import img_2 from "./img/EHWeR9yX4AECrzI.jpg";
import img_3 from "./img/EHY6VzyXkAEDXTl.jpg";
import img_4 from "./img/EHZokMmXYAAp8yQ.jpg";
import "./Carousel.scss";

class Carousel extends React.Component {
  render() {
    return (
      <section className="carousel">
        <div className="carousel__container">
          <img src={img_1} />
          <img src={img_2} />
          <img src={img_3} />
          <img src={img_4} />
        </div>
      </section>
    );
  }
}

export default Carousel;
