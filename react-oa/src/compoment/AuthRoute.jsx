import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom'

const AuthRoute = ({ component: Component, isAuth = false, ...rest }) => (
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

export default AuthRoute;