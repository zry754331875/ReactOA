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

const ListItem = ({ style,title, imageUrl='' }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column",'alignItems':'center',...style}}>
      <img  src={imageUrl} alt={imageUrl} />
      <span>{title}</span>
    </div>
  );
};

export class Work extends PureComponent {
  
  componentDidMount() {}

  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          leftContent={<Icon type="left" />}
          rightContent={<Icon key="1" type="ellipsis" />}
        >
          工作台
        </NavBar>
        <div className="container">
          <ListItem title='工作台1' imageUrl={require('@assets/120.png')}></ListItem>
          
        </div>
      </div>
    );
  }
}

Work.propTypes = {};
Work.defaultProps = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  getHomeList: pageIndex => {
    dispatch(
      createAction(WORK_TYPES.FETCH_HOME_LIST_START)()
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Work);
