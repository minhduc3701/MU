import React from "react";

import img_1 from "./img/EHdvygsWwAA8UzJ.jpg";
import img_2 from "./img/EG2Q71vWwAMx1WK.jpg";
import img_3 from "./img/EHer3QpXkAAtoH7.jpg";
import img_4 from "./img/EHbVNXVXUAEvvGX.jpg";
import img_5 from "./img/EG14ACYXYAMyfaa.jpg";
import img_6 from "./img/EHbGnqIWkAMBraF.jpg";

import "./MainArticle.scss";

class MainArticle extends React.Component {
  render() {
    return (
      <section className="article">
        <div className="article__container">
          <div className="article__card bigger">
            <img src={img_1} alt="" />
            <div className="article__content">
              <h4>OPINION: ENCOURAGEMENT FOR INDUSTRIOUS FRED</h4>
              <p>
                On Monday night, Patrice Evra appeared on Sky Sports’ coverage
                of Sheffield United against Arsenal and spoke during the
                broadcast about how hard it was to settle at Manchester United.
              </p>
            </div>
          </div>
          <div className="article__card bigger">
            <img src={img_2} alt="" />
            <div className="article__content">
              <h4>OPINION: ENCOURAGEMENT FOR INDUSTRIOUS FRED</h4>
              <p>
                On Monday night, Patrice Evra appeared on Sky Sports’ coverage
                of Sheffield United against Arsenal and spoke during the
                broadcast about how hard it was to settle at Manchester United.
              </p>
            </div>
          </div>
          <div className="article__card card">
            <img src={img_3} alt="" />
            <div className="article__content">
              <h4>OPINION: ENCOURAGEMENT FOR INDUSTRIOUS FRED</h4>
              <p>
                On Monday night, Patrice Evra appeared on Sky Sports’ coverage
                of Sheffield United against Arsenal and spoke during the
                broadcast about how hard it was to settle at Manchester United.
              </p>
            </div>
          </div>
          <div className="article__card card">
            <img src={img_4} alt="" />
            <div className="article__content">
              <h4>OPINION: ENCOURAGEMENT FOR INDUSTRIOUS FRED</h4>
              <p>
                On Monday night, Patrice Evra appeared on Sky Sports’ coverage
                of Sheffield United against Arsenal and spoke during the
                broadcast about how hard it was to settle at Manchester United.
              </p>
            </div>
          </div>
          <div className="article__card card">
            <img src={img_5} alt="" />
            <div className="article__content">
              <h4>OPINION: ENCOURAGEMENT FOR INDUSTRIOUS FRED</h4>
              <p>
                On Monday night, Patrice Evra appeared on Sky Sports’ coverage
                of Sheffield United against Arsenal and spoke during the
                broadcast about how hard it was to settle at Manchester United.
              </p>
            </div>
          </div>
          <div className="article__card card">
            <img src={img_6} alt="" />
            <div className="article__content">
              <h4>OPINION: ENCOURAGEMENT FOR INDUSTRIOUS FRED</h4>
              <p>
                On Monday night, Patrice Evra appeared on Sky Sports’ coverage
                of Sheffield United against Arsenal and spoke during the
                broadcast about how hard it was to settle at Manchester United.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainArticle;
