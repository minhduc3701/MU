import React from "react";

import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import StorePage from "./pages/StorePage/StorePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import Contact from "./pages/Contact/Contact";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="wrappers">
        {/* Menu */}
        <Menu></Menu>
        <Contact></Contact>
        {/* Footer */}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
