import { Route, Switch } from "react-router-dom";
import Login from "@page/login/index";
import Main from "@page/Main/index";
import Contact from "@page/Contact/index";
import AuthRoute from "@component/AuthRoute";
import React, { PureComponent } from "react";


const router = (
  <div>
    <Switch>
      <Route exact path="/" component={Login} />
      <AuthRoute path="/Main" component={Main} />
      <AuthRoute path="/Contact" component={Contact} />
      <Route component={Login} />
    </Switch>
  </div>
);

export default router;
