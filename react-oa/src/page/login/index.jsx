import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Input, Icon,Button } from "antd";
import "./style.css";
import icon from "../../assets/120.png";

export class Login extends PureComponent {
  render() {
    return (
      <div className="container">
        <img className="icon" src={icon} alt="icon" />
        <Input
          className="input input-username"
          placeholder="请输入账号"
          onChange={this.props.onInputValueChange}
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
        />
        <Input
          className="input input-password"
          placeholder="请输入密码"
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
        />
        <Button className="button-login" type="primary" onClick={this.props.onLogin}>登录</Button>
      </div>
    );
  }
}

Login.propTypes = {};
Login.defaultProps = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
