import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from "../page/login/index";
import Main from "../page/Main/index";
const rootRouter = (
    <div>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/Main" component={Main}/>
        <Route component={Login}/>
      </Switch>
    </div>
)

export default rootRouter