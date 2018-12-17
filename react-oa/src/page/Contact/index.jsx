import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./style.module.css";


export class Contact extends PureComponent {
  constructor(props) {
    super(props);

    this.divRef = React.createRef()
    
  }
  render() {
      
    return <div className={styles.content} onClick={()=>{let div = document.getElementsByClassName(styles.content)[0]
    console.log(div)}}>123</div>;
  }
}

Contact.propTypes = {};
Contact.defaultProps = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
