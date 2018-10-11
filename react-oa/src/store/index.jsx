import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { store, history, persistor } from "./store";
import Router from "./router";
import { PersistGate } from "redux-persist/integration/react";

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
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>{Router}</ConnectedRouter>
        </PersistGate>
      </Provider>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};
