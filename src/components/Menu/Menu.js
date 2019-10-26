import React from "react";

import img_adidas from "./img/Adidas_Comp_DarkBG_180xAuto1547460200382.png";
import img_aon from "./img/Aon_Comp_DarkBG_180xAuto1547460367130.png";
import img_kohler from "./img/Kohler_Comp_DarkBG_180xAuto1547470584246.png";
import img_chevrolet from "./img/Chevrolet_Comp_DarkBG_180xAuto1547460511300.png";
import img_logo from "./img/Header-Logo1500994616801.png";
import "./Menu.scss";

class Menu extends React.Component {
  render() {
    return (
      <header>
        <div className="header__container">
          {/* <!-- top row --> */}
          <div className="header__row">
            <ul className="header__list">
              <li>
                <img className="header__logo" src={img_adidas} alt="Adidas" />
              </li>
              <li>
                <img
                  className="header__logo"
                  src={img_chevrolet}
                  alt="Chevrolet"
                />
              </li>
              <li>
                <img className="header__logo" src={img_aon} alt="Aon" />
              </li>
              <li>
                <img className="header__logo" src={img_kohler} alt="Kohler" />
              </li>
            </ul>
          </div>
          {/* <!-- Menu  --> */}
          <div className="header__menu">
            <nav>
              <ul>
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">NEWS</a>
                </li>
                <li>
                  <a href="#">PLAYER</a>
                </li>
                <li>
                  <a href="#">
                    <img src={img_logo} alt="Manchester United" />
                  </a>
                </li>
                <li>
                  <a href="#">HISTORY</a>
                </li>
                <li>
                  <a href="#">ABOUT</a>
                </li>
                <li>
                  <a href="#">SHOP</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Menu;
