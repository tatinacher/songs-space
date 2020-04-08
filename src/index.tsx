import React from "react";
import ReactDOM from "react-dom";
import { routes } from "./pages/router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./ui";
import "./index.css";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        {routes.map((route: any, key) => (
          <Route key={key} {...route} />
        ))}
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
