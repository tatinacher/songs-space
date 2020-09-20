import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { routes } from './pages/router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './ui';
import './index.css';

export const Body = styled.div`
  padding-top: 55px;
`;

const App = () => {
  return (
    <div>
      <Header />
      <Body>
        <Switch>
          {routes.map((route: any, key) => (
            <Route key={key} {...route} />
          ))}
        </Switch>
      </Body>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
