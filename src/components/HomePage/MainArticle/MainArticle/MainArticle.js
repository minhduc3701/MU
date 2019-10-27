import React, { Fragment } from "react";

import ArticleCard from "./../ArticleCard/ArticleCard";
import ArticleBigger from "./../ArticleBigger/ArticleBigger";

class MainArticle extends React.Component {
  render() {
    return (
      <Fragment>
        <ArticleBigger></ArticleBigger>
        <ArticleBigger></ArticleBigger>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
      </Fragment>
    );
  }
}

export default MainArticle;
