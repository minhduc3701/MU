import React from "react";

import img1 from "./img/EH9NCRdW4AAvsqg.jpg";
import img2 from "./img/EHdvygsWwAA8UzJ.jpg";
import img_avatar from "./img/DvMzk0jX4AIqufY.jpg";
import "./NewsPage.scss";

class NewsPage extends React.Component {
  render() {
    return (
      <div className="news">
        <img className="news__cover" src={img1} alt="" />
        <div className="news__content">
          <h1>WHAT IMPRESSED OLE ABOUT RASHFORD</h1>
          <h3>
            Often, it's a piece of play that does not get the most attention
            during a game which leaves a lasting impression.
          </h3>

          <p>
            Sometimes, the briefest glimpse of quality or endeavour illustrates
            so much more in a wider context. Those little moments that mean so
            much.
          </p>
          <br />
          <p>
            For Manchester United manager Ole Gunnar Solskjaer, it was Marcus
            Rashford's reaction to having a penalty saved by Tim Krul in the
            first half of the 3-1 victory at Norwich City.
          </p>
          <br />
          <p>
            The obvious route would be to discuss his goal, coming on the
            half-hour mark, moments after Krul's spot-kick save. A dart through
            the middle, taking advantage of the space left by the Canaries'
            defence, a sumptuous first touch and a clinical finish past the
            advancing keeper. A classic piece of marksmanship, showing great
            confidence, on the back of failing to net from 12 yards.
          </p>
          <br />
          <img className="img_article" src={img2} alt="" />
          <p>
            “It was an excellent response,” said the boss. “Just to see Marcus
            chasing the ball down with Max Aarons, probably in a 50-yard sprint,
            and making a tackle in front of the dug-out was the best response
            you can ask from a player.”
          </p>
          <br />
          <p>
            Such application and desire to atone, rather than any thought of
            dwelling on the miss spoke volumes about somebody who celebrates his
            22nd birthday later this week.
          </p>
          <br />
          <p>
            It was the sort of attitude that suggested Rashford was not going to
            let his head drop and he was soon rewarded with his 50th goal for
            the club.
          </p>
          <br />
          <br />
          <br />
          <hr />
          <div className="news__writer">
            <div className="news__avatar">
              <img src={img_avatar} alt="" />
              <small>by Adam Marshall</small>
            </div>
            <small>October 2019</small>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsPage;
