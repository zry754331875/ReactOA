import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from "../page/login/index";

const rootRouter = (
    <div>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route component={Login}/>
      </Switch>
    </div>
)

export default rootRouter