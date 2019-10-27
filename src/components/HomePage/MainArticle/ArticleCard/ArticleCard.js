import React from "react";

import ArticleItem from "./../ArticleItem/ArticleItem";
import "./ArticleCard.scss";

class ArticleCard extends React.Component {
  render() {
    return (
      <div className="article__card card">
        <ArticleItem></ArticleItem>
      </div>
    );
  }
}

export default ArticleCard;
