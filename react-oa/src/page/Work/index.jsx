import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFetch } from "@utils/fetch";
import { NavBar, Icon, List } from "antd-mobile";
import "./style.css";
import { createAction } from "redux-actions";
import * as WORK_TYPES from "./contants";

const Item = List.Item;
const Brief = Item.Brief;

export class Work extends PureComponent {
  state = {
    disabled: false
  };

  componentDidMount() {
    this.props.getHomeList(0);
  }

  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          leftContent={<Icon type="left" />}
          rightContent={<Icon key="1" type="ellipsis" />}
        >
          首页
        </NavBar>
        <List renderHeader={() => "Subtitle"} className="my-list">
          <Item
            arrow="horizontal"
            multipleLine
            onClick={() => {}}
            platform="android"
          >
            ListItem （Android）
          </Item>
          <Item
            arrow="horizontal"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
            onClick={() => {}}
          >
            Title <Brief>subtitle</Brief>
          </Item>
        </List>
      </div>
    );
  }
}

Work.propTypes = {};
Work.defaultProps = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  getHomeList: (pageIndex) => {
    dispatch(createAction(WORK_TYPES.FETCH_HOME_LIST_START)({pageIndex:pageIndex}));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Work);
