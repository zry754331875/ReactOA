import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { TabBar } from "antd-mobile";
// import "antd-mobile/lib/tab-bar/style/css";
import "./style.css";
import icon_work_normal from "@assets/icon_工作台_normal.png";
import icon_work_press from "@assets/icon_工作台_press.png";
import { createAction } from "redux-actions";
import Work from "@page/Work/index";

export class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "0",
      hidden: false
    };
  }

  
  renderContent(index) {
    let component = (<div></div>)

    if (index == 0) {
      component = (<Work></Work>)
    }
    else if(index == 1){

    }
    else if(index == 2){

    }

    return component;
  }

  render() {
    return (
      <div style={{ position: "fixed", height: "100%", width: "100%", top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="工作台"
            key="0"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${icon_work_normal}) center center /  21px 21px no-repeat`
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${icon_work_press}) center center /  21px 21px no-repeat`
                }}
              />
            }
            selected={this.state.selectedTab === "0"}
            onPress={() => {
              this.setState({
                selectedTab: "0"
              });
            }}
            data-seed="logId"
          >
            {this.renderContent(0)}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="通讯录"
            key="1"
            selected={this.state.selectedTab === "1"}
            onPress={() => {
              this.setState({
                selectedTab: "1"
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent(1)}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="我的"
            key="2"
            selected={this.state.selectedTab === "2"}
            onPress={() => {
              this.setState({
                selectedTab: "2"
              });
            }}
          >
            {this.renderContent(2)}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

Main.propTypes = {};
Main.defaultProps = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
