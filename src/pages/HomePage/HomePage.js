import React, { Fragment } from "react";

import Menu from "./../../components/Menu/Menu";
import Carousel from "./../../components/Carousel/Carousel";
import MainArticle from "./../../components/MainArticle/MainArticle";
import PictureSection from "./../../components/PictureSection/PictureSection";
import PictureSection2 from "./../../components/PictureSection2/PictureSection2";
import SubArticle from "./../../components/SubArticle/SubArticle";
import Matches from "./../../components/Matches/Matches";
import Footer from "./../../components/Footer/Footer";

class HomePage extends React.Component {
  render() {
    return (
      <Fragment>
        {/* <!-- Menu --> */}
        <Menu></Menu>
        {/* <!-- Carousel --> */}
        <Carousel></Carousel>

        {/* <!-- Main article --> */}
        <MainArticle></MainArticle>
        {/* <!-- pic --> */}
        <PictureSection></PictureSection>

        {/* <!-- sub article --> */}
        <SubArticle></SubArticle>
        {/* <!-- pic --> */}
        <PictureSection2></PictureSection2>

        {/* <!-- Matches --> */}
        <Matches></Matches>
        {/* <!-- Footer --> */}
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default HomePage;
