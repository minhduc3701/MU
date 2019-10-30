import React from "react";
import img1 from "./img/nintchdbpict000000242270.jpg";
import img2 from "./img/may-bay-15179623704051452967493.jpg";
import img_avatar from "./img/DvMzk0jX4AIqufY.jpg";
import "./HistoryPage.scss";

class HistoryPage extends React.Component {
  render() {
    return (
      <div className="history">
        <img className="history__cover" src={img1} alt="" />
        <div className="history__content">
          <h1>MUNICH AIR DISASTER</h1>
          <p>
            The Munich air disaster occurred on 6 February 1958 when British
            European Airways Flight 609 crashed on its third attempt to take off
            from a slush-covered runway at Munich-Riem Airport, West Germany. On
            the plane was the Manchester United football team, nicknamed the
            "Busby Babes", along with supporters and journalists. Twenty of the
            44 on the aircraft died at the scene. The injured, some unconscious,
            were taken to the Rechts der Isar Hospital in Munich where three
            more died, resulting in 23 fatalities with 21 survivors.
          </p>
          <br />
          <p>
            The team was returning from a European Cup match in Belgrade,
            Yugoslavia, having eliminated Red Star Belgrade to advance to the
            semi-finals of the competition. The flight stopped to refuel in
            Munich because a non-stop flight from Belgrade to Manchester was
            beyond the "Elizabethan"-class Airspeed Ambassador's range. After
            refuelling, pilots James Thain and Kenneth Rayment twice abandoned
            take-off because of boost surging in the left engine. Fearing they
            would get too far behind schedule, Captain Thain rejected an
            overnight stay in Munich in favour of a third take-off attempt. By
            then, snow was falling, causing a layer of slush to form at the end
            of the runway. After the aircraft hit the slush, it ploughed through
            a fence beyond the end of the runway and the left wing was torn off
            after hitting a house. Fearing the aircraft might explode, Thain
            began evacuating passengers while Manchester United goalkeeper Harry
            Gregg helped pull survivors from the wreckage.
          </p>
          <br />
          <img className="img_article" src={img2} alt="" />
          <br />
          <p>
            An investigation by West German airport authorities originally
            blamed Thain, saying he did not de-ice the aircraft's wings, despite
            eyewitness statements to the contrary. It was later established that
            the crash was caused by the slush on the runway, which slowed the
            plane too much to take off. Thain was cleared in 1968, ten years
            after the incident.
          </p>
          <br />
          <p>
            Manchester United were trying to become the third club to win three
            successive English league titles; they were six points behind League
            leaders Wolverhampton Wanderers with 14 games to go. They also held
            the Charity Shield and had just advanced into their second
            successive European Cup semi-finals. The team had not been beaten
            for 11 matches. The crash not only derailed their title ambitions
            that year but also virtually destroyed the nucleus of what promised
            to be one of the greatest generations of players in English football
            history. It took 10 years for the club to recover, with Busby
            rebuilding the team and winning the European Cup in 1968 with a new
            generation of "Babes".
          </p>

          <br />
          <br />
          <br />
          <hr />
          <div className="history__writer">
            <div className="history__avatar">
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

export default HistoryPage;
