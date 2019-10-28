import React, { Fragment } from "react";

import ArticleCard from "./../ArticleCard/ArticleCard";
import ArticleBigger from "./../ArticleBigger/ArticleBigger";

import ArticleItem from "./../ArticleItem/ArticleItem";
import "./media_MainArticle.scss";

class MainArticle extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="article__card bigger">
          <ArticleItem></ArticleItem>
        </div>
        <div className="article__card bigger">
          <ArticleItem></ArticleItem>
        </div>
        <div className="article__card card">
          <ArticleItem></ArticleItem>
        </div>
        <div className="article__card card">
          <ArticleItem></ArticleItem>
        </div>
        <div className="article__card card">
          <ArticleItem></ArticleItem>
        </div>
        <div className="article__card card">
          <ArticleItem></ArticleItem>
        </div>
      </Fragment>
    );
  }
}

export default MainArticle;
