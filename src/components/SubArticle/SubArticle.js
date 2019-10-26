import React from "react";

import img1 from "./img/EHT_pRXXYAAKUTy.jpg";
import img2 from "./img/EHU2VNBW4AESovv.jpg";
import "./SubArticle.scss";

class SubArticle extends React.Component {
  render() {
    return (
      <section className="subArticle__container">
        <div className="subArticle__card">
          <div className="a">
            <img src={img2} alt="" />
          </div>
          <div className="subArticle__content">
            <h2>OPINION: ENCOURAGEMENT FOR INDUSTRIOUS FRED</h2>
            <p>
              On Monday night, Patrice Evra appeared on Sky Sports’ coverage of
              Sheffield United against Arsenal and spoke during the broadcast
              about how hard it was to settle at Manchester United.
            </p>
          </div>
        </div>
        <div className="subArticle__card">
          <div className="a">
            <img src={img1} alt="" />
          </div>
          <div className="subArticle__content">
            <h2>OPINION: ENCOURAGEMENT FOR INDUSTRIOUS FRED</h2>
            <p>
              On Monday night, Patrice Evra appeared on Sky Sports’ coverage of
              Sheffield United against Arsenal and spoke during the broadcast
              about how hard it was to settle at Manchester United.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default SubArticle;
