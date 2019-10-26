import React from "react";

import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer__container">
          <div className="footer__social">
            <ul>
              <li>
                <a href="#">YOUTUBE</a>
              </li>
              <li>
                <a href="#">FACEBOOK</a>
              </li>
              <li>
                <a href="#">TWITTER</a>
              </li>
              <li>
                <a href="#">INSTAGRAM</a>
              </li>
              <li>
                <a href="#">PINTEREST</a>
              </li>
            </ul>
          </div>
          <div className="footer__bottom">
            <strong>©2019 Manchester United FC Ltd</strong>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
