import React from "react";

import img_mu from "./img/Header-Logo1500994616801.png";
import img_liv from "./img/Liverpool_Crest_Comp_180x1801550570408320.png";
import img_pl from "./img/PremierLeague_logo_Black1506593679851.png";
import "./Matches.scss";

class Matches extends React.Component {
  render() {
    return (
      <section className="matches">
        <h2>MATCHES</h2>
        <div className="matches__container">
          <div className="matches__card card">
            <img className="matches__league" src={img_pl} />
            <p>Sunday 20 October 2019, 22:30,Old Trafford</p>
            <div className="matches__info">
              <span className="matches__logo">
                <img src={img_mu} />
              </span>
              <span className="matches__result">1 : 1</span>
              <span className="matches__logo">
                <img src={img_liv} />
              </span>
            </div>
            <div className="matches__name">
              <span className="matches__club">MAN UTD</span>
              <span className="vs">VS</span>
              <span className="matches__club">LIVERPOOL</span>
            </div>
          </div>
          <div className="matches__card card">
            <img className="matches__league" src={img_pl} />
            <p>Sunday 20 October 2019, 22:30,Old Trafford</p>
            <div className="matches__info">
              <span className="matches__logo">
                <img src={img_mu} />
              </span>
              <span className="matches__result">1 : 1</span>
              <span className="matches__logo">
                <img src={img_liv} />
              </span>
            </div>
            <div className="matches__name">
              <span className="matches__club">MAN UTD</span>
              <span className="vs">VS</span>
              <span className="matches__club">LIVERPOOL</span>
            </div>
          </div>
          <div className="matches__card card">
            <img className="matches__league" src={img_pl} />
            <p>Sunday 20 October 2019, 22:30,Old Trafford</p>
            <div className="matches__info">
              <span className="matches__logo">
                <img src={img_mu} />
              </span>
              <span className="matches__result">1 : 1</span>
              <span className="matches__logo">
                <img src={img_liv} />
              </span>
            </div>
            <div className="matches__name">
              <span className="matches__club">MAN UTD</span>
              <span className="vs">VS</span>
              <span className="matches__club">LIVERPOOL</span>
            </div>
          </div>
          <div className="matches__card card">
            <img className="matches__league" src={img_pl} />
            <p>Sunday 20 October 2019, 22:30,Old Trafford</p>
            <div className="matches__info">
              <span className="matches__logo">
                <img src={img_mu} />
              </span>
              <span className="matches__result">1 : 1</span>
              <span className="matches__logo">
                <img src={img_liv} />
              </span>
            </div>
            <div className="matches__name">
              <span className="matches__club">MAN UTD</span>
              <span className="vs">VS</span>
              <span className="matches__club">LIVERPOOL</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Matches;
