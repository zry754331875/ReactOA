import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Input, Icon, Button, Spin } from "antd";
import { Toast } from 'antd-mobile';
import "./style.css";
import { createAction } from "redux-actions";
import * as LOGIN_TYPE from "./contants";

export class Login extends PureComponent {

  onLogin = () => {

    this.props.onLogin(this.usernameInput.input.value,this.passwordInput.input.value)
  };

  render() {

    const {isLoading,error} = this.props

    return (
      <div className="container">
        {isLoading ? <Spin className="spin" size="large" /> : null}
        {error ? Toast.fail(`${error.msg}`, 1) : null}
        <img className="icon" src={require('@assets/120.png')} alt="icon" />
        <Input
          ref={r => (this.usernameInput = r)}
          className="input input-username"
          placeholder="请输入账号"
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
        />
        <Input
          ref={r => (this.passwordInput = r)}
          type="password"
          className="input input-password"
          placeholder="请输入密码"
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
        />
        <Button className="button-login" type="primary" onClick={this.onLogin}>
          登录
        </Button>
      </div>
    );
  }
}

Login.propTypes = {};
Login.defaultProps = {};

const mapStateToProps = state => ({
  isLoading: state.login.isLoading,
  error: state.login.error
});

const mapDispatchToProps = dispatch => ({
  onLogin: (username, password) =>
    dispatch(createAction(LOGIN_TYPE.LOGIN_START)({ username, password }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
