import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'mobx-react';
import { Router, browserHistory, Route } from "react-router";
import routes from './routes';
import { useStrict } from 'mobx';
useStrict(true);

const app = document.getElementById('app');

ReactDOM.render(
  <Router
    history={browserHistory}
    routes={routes}>
  </Router>,
  app
);
