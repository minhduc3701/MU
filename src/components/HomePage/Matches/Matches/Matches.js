import React, { Fragment } from "react";

import MatchItem from "./../MatchItem/MatchItem";

class Matches extends React.Component {
  render() {
    return (
      <Fragment>
        <MatchItem></MatchItem>
        <MatchItem></MatchItem>
        <MatchItem></MatchItem>
        <MatchItem></MatchItem>
      </Fragment>
    );
  }
}

export default Matches;
