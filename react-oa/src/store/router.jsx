import { Route, Switch } from 'react-router-dom'
import Login from "@page/login/index";
import Main from "@page/Main/index";
import AuthRoute from "@compoment/AuthRoute";
import { connect } from "react-redux";
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class Router extends PureComponent {

  render() {
    return (
      <div>
      <Switch>
        <Route exact path="/" component={Login}/>
        <AuthRoute path="/Main" component={Main} isAuth={this.props.isAuth}/>
        <Route component={Login}/>
      </Switch>
    </div>
    )
  }
}

Router.propTypes = {
  
}
Router.defaultProps = {
  
}

const mapStateToProps = (state) => ({
  isAuth:state.login.isAuth,
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Router)

