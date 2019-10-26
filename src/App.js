import React from "react";

import HomePage from "./pages/HomePage/HomePage";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="wrappers">
        {/* HomePage */}
        <HomePage></HomePage>

        {/* StorePage */}
      </div>
    );
  }
}

export default App;
