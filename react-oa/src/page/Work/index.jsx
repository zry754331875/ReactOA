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

const ListItem = ({ style, title, imageUrl = "",onClick }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems:'center',
        ...style
      }}
      onClick={onClick}
    >
      <img style={{width:'50%',height:'50%'}} src={imageUrl} alt={imageUrl} />
      <span>{title}</span>
    </div>
  );
};

export class Work extends PureComponent {
  componentDidMount() {}

  render() {
    let listItems = [];
    
    for (let i = 0; i < 15; i++) {
      listItems.push(
        <ListItem key={`${i}`} style={{width:'25%'}} title={`工作台${i}`} imageUrl={require(`@assets/work_${i}.png`)}/>
      );
    }

    return (
      <div className='out-container' >
        <NavBar
          style={{position:'fixed',width:'100%',top: '0',}}
          mode="dark"
          leftContent={<Icon type="left" />}
          rightContent={<Icon key="1" type="ellipsis" />}
        >
          工作台
        </NavBar>
        <div className="container" style={{marginTop:'45px'}}>{listItems}</div>
        <div className="container">{listItems}</div>
        <div className="container">{listItems}</div>
        <div className="container">{listItems}</div>
        
      </div>
    );
  }
}

Work.propTypes = {};
Work.defaultProps = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  getHomeList: pageIndex => {
    dispatch(createAction(WORK_TYPES.FETCH_HOME_LIST_START)());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Work);
