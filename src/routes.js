import React from "react";

import StorePage from "./pages/StorePage/StorePage";
import Contact from "./pages/Contact/Contact";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NotFound from "./pages/NotFound/NotFound";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <StorePage></StorePage>
  },
  {
    path: "/contact",
    exact: false,
    main: () => <Contact></Contact>
  },
  {
    path: "/history",
    exact: false,
    main: () => <HistoryPage></HistoryPage>
  },
  {
    path: "/news",
    exact: false,
    main: () => <NewsPage></NewsPage>
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound></NotFound>
  }
];

export default routes;
