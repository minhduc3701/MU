import React from "react";

import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import StorePage from "./pages/StorePage/StorePage";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="wrappers">
        {/* Menu */}
        <Menu></Menu>
        <HomePage></HomePage>
        {/* Footer */}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
