import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { store, history } from "./store";
import router from "./router";

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

export class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>{router}</ConnectedRouter>
      </Provider>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
