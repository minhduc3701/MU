import React, { Fragment } from "react";

import Carousel from "./../../components/HomePage/Carousel/Carousel";
import MainArticle from "./../../components/HomePage/MainArticle/MainArticle/MainArticle";
import PictureSection from "./../../components/HomePage/PictureSection/PictureSection";
import PictureSection2 from "./../../components/HomePage/PictureSection2/PictureSection2";
import SubArticle from "./../../components/HomePage/SubArticle/SubArticle";
import Matches from "./../../components/HomePage/Matches/Matches/Matches";
import "./HomePage.scss";

class HomePage extends React.Component {
  render() {
    return (
      <Fragment>
        {/* <!-- Carousel --> */}
        <Carousel></Carousel>

        {/* <!-- Main article --> */}
        <section class="article">
          <div class="article__container">
            <MainArticle></MainArticle>
          </div>
        </section>
        {/* <!-- pic --> */}
        <PictureSection></PictureSection>

        {/* <!-- sub article --> */}
        <section class="subArticle__container">
          <SubArticle></SubArticle>
        </section>
        {/* <!-- pic --> */}
        <PictureSection2></PictureSection2>

        {/* <!-- Matches --> */}
        <section class="matches">
          <h2>MATCHES</h2>
          <div class="matches__container">
            <Matches></Matches>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default HomePage;
