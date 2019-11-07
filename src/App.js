import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import routes from "./routes";

class App extends React.Component {
  showContentMenus = routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          ></Route>
        );
      });
    }
    return <Switch>{result}</Switch>;
  };

  render() {
    return (
      <Router>
        <div className="wrappers">
          {/* Menu */}
          <Menu></Menu>
          {this.showContentMenus(routes)}
          {/* Footer */}
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
