import React, { Fragment } from "react";

import img_1 from "./img/EHdvygsWwAA8UzJ.jpg";

import "./ArticleItem.scss";

class ArticleItem extends React.Component {
  render() {
    return (
      <Fragment>
        <img src={img_1} alt="" />
        <div className="article__content">
          <h4>OPINION: ENCOURAGEMENT FOR INDUSTRIOUS FRED</h4>
          <p>
            On Monday night, Patrice Evra appeared on Sky Sports’ coverage of
            Sheffield United against Arsenal and spoke during the broadcast
            about how hard it was to settle at Manchester United.
          </p>
        </div>
      </Fragment>
    );
  }
}

export default ArticleItem;
