import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import { routes } from './pages/router';
import { Header } from './ui';

export const Body = styled.div`
  padding-top: 55px;
`;

export const Global = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto Mono', monospace;
    font-weight: 300;
    background: #fff;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  :root {
    --primary: #343434;
    --main: #f9fff5;
    /* --accent: #ffc759;*/
    --bg: #101027;
    --accent: #d7263d;
    --switch: #2196f3;
  }
`;

const App = () => (
  <>
    <Header />
    <Body>
      <Switch>
        {routes.map((route: any, key) => (
          <Route key={key} {...route} />
        ))}
      </Switch>
    </Body>
    <Global />
  </>
);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
