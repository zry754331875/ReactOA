import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFetch } from "@utils/fetch";
import { NavBar, Icon } from "antd-mobile";

export class Work extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          leftContent={<Icon type="left" />}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
            <Icon key="1" type="ellipsis" />
          ]}
        >
          首页
        </NavBar>
      </div>
    );
  }
}

Work.propTypes = {};
Work.defaultProps = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Work);
