import { Route, Switch } from "react-router-dom";
import Login from "@page/login/index";
import Main from "@page/Main/index";
import AuthRoute from "@component/AuthRoute";
import React, { PureComponent } from "react";


const router = (
  <div>
    <Switch>
      <Route exact path="/" component={Login} />
      <AuthRoute path="/Main" component={Main} />
      <Route component={Login} />
    </Switch>
  </div>
);

export default router;
