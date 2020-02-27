import React from "react";
import ReactDOM from "react-dom";
import { routes } from "./pages/router";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/song">Song</Link>
          </li>
          <li>
            <Link to="/create-song">Create Song</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        {routes.map((route, key) => (
          <Route key={key} path={route.path} component={route.component} />
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
