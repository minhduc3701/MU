import React from "react";

import ArticleItem from "./../ArticleItem/ArticleItem";
import "./ArticleBigger.scss";

class ArticleBigger extends React.Component {
  render() {
    return (
      <div className="article__card bigger">
        <ArticleItem></ArticleItem>
      </div>
    );
  }
}

export default ArticleBigger;
