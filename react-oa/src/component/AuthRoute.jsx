import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

export class AuthRoute extends PureComponent {
  render() {
    const { component:Component, isAuth, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props =>
          isAuth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

AuthRoute.propTypes = {};
AuthRoute.defaultProps = {};

const mapStateToProps = state => ({
  isAuth:state.login.isAuth
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRoute);
