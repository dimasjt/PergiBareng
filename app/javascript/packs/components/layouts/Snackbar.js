import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Snackbar as Snack } from "material-ui";
import PropTypes from "prop-types";

import * as actions from "../../actions/alert";

const Snackbar = (props) => {
  const { message } = props.alert.flash;

  return (
    <Snack
      open={props.alert.flash.open}
      message={message}
      autoHideDuration={4000}
      onRequestClose={() => props.actions.hideFlash()}
    />
  );
};

Snackbar.propTypes = {
  actions: PropTypes.any.isRequired,
  alert: PropTypes.any.isRequired,
};

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(Snackbar);
