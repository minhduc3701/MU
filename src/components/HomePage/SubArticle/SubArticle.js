import React, { Fragment } from "react";

import ArticleBigger from "./../MainArticle/ArticleBigger/ArticleBigger";

class SubArticle extends React.Component {
  render() {
    return (
      <Fragment>
        <ArticleBigger></ArticleBigger>
        <ArticleBigger></ArticleBigger>
      </Fragment>
    );
  }
}

export default SubArticle;
