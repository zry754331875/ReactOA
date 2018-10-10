import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { store, history } from "./store";
import Router from "./router";

const ISDEBU = true;
ISDEBU ||
  (() => {
    window.console = {
      info: () => {},
      log: () => {},
      warn: () => {},
      debug: () => {},
      error: () => {}
    };
  })();

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router />
        </ConnectedRouter>
      </Provider>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};
