import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import img_avatar from "./DvMzk0jX4AIqufY.jpg";
import "./Contact.scss";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h1>CONTACT US</h1>
        <p>
          All the essential numbers and email addresses you need to get in touch
          with us at Manchester United.
        </p>
        <h1>HOW TO CONTACT US</h1>
        <div className="contact__phone">
          <FontAwesomeIcon
            className="contact__icon"
            icon={faPhone}
          ></FontAwesomeIcon>
          <p>Match ticket and Season Ticket sales and enquiries</p>
          <a className="address" href="tel:+44 161 868 8000">
            +44 161 868 8000
          </a>
          <p>Official Membership & sales enquiries</p>
          <a className="address" href="tel:+44 161 868 8000">
            +44 161 868 8000
          </a>
          <p>Accessible ticketing & advice</p>
          <a className="address" href="tel:+44 161 868 8000">
            +44 161 868 8000
          </a>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <div className="contact__mail">
          <FontAwesomeIcon
            className="contact__icon"
            icon={faEnvelope}
          ></FontAwesomeIcon>
          <p>Match ticket and Season Ticket sales & enquiries</p>
          <a className="address" href="mailto:tickets@manutd.co.uk">
            tickets@manutd.co.uk
          </a>
          <p>Official Membership & sales enquiries</p>
          <a className="address" href="mailto:membership@manutd.co.uk">
            membership@manutd.co.uk
          </a>
          <p>Accessible ticketing & advice</p>
          <a className="address" href="mailto:accessibility@manutd.co.uk">
            accessibility@manutd.co.uk
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
