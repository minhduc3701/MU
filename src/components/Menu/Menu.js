import React from "react";
import { Route, Link } from "react-router-dom";

import img_adidas from "./img/Adidas_Comp_DarkBG_180xAuto1547460200382.png";
import img_aon from "./img/Aon_Comp_DarkBG_180xAuto1547460367130.png";
import img_kohler from "./img/Kohler_Comp_DarkBG_180xAuto1547470584246.png";
import img_chevrolet from "./img/Chevrolet_Comp_DarkBG_180xAuto1547460511300.png";
import img_logo from "./img/Header-Logo1500994616801.png";
import "./Menu.scss";

const menus = [
  {
    name: "HOME",
    to: "/",
    exact: true
  },
  {
    name: "NEWS",
    to: "/news",
    exact: false
  },
  {
    name: "HISTORY",
    to: "/history",
    exact: false
  },
  {
    name: "CONTACT",
    to: "/contact",
    exact: false
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        let active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    ></Route>
  );
};

class Menu extends React.Component {
  showMenu = menus => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          ></MenuLink>
        );
      });
    }
    return result;
  };

  render() {
    return (
      <header>
        <div className="header__container">
          {/* <!-- top row --> */}
          <div className="header__row">
            <ul className="header__list">
              <li>
                <img src={img_adidas} alt="Adidas" />
              </li>
              <li>
                <img src={img_chevrolet} alt="Chevrolet" />
              </li>
              <li>
                <img src={img_aon} alt="Aon" />
              </li>
              <li>
                <img src={img_kohler} alt="Kohler" />
              </li>
            </ul>
          </div>
          {/* <!-- Menu  --> */}
          <div className="header__menu">
            <Link to="/" exact={true} className="header__brand">
              <img src={img_logo} alt="" />
              <a href="#" className="header__content">
                <div>
                  <span className="white">UNITED</span>
                  <span className="black">DIRECT</span>
                  <p>THE OFFICAL ONLINE MEGASTORE</p>
                </div>
              </a>
            </Link>
            <nav>
              <ul>{this.showMenu(menus)}</ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Menu;
