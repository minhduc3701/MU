import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faYoutube,
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faPinterest
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer__container">
          <div className="footer__social">
            <ul>
              <li>
                <a href="https://www.youtube.com/manutd">
                  <FontAwesomeIcon
                    className="footer__icon"
                    icon={faYoutube}
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/manchesterunited">
                  <FontAwesomeIcon
                    className="footer__icon"
                    icon={faFacebookSquare}
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ManUtd">
                  <FontAwesomeIcon
                    className="footer__icon"
                    icon={faTwitter}
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="http://instagram.com/manchesterunited">
                  <FontAwesomeIcon
                    className="footer__icon"
                    icon={faInstagram}
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/manutd/">
                  <FontAwesomeIcon
                    className="footer__icon"
                    icon={faPinterest}
                  ></FontAwesomeIcon>
                </a>
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
