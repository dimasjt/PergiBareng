import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class EditPlacePage extends React.Component {
  render() {
    return (
      <div>EditPlacePage</div>
    );
  }
}

export default connect(
  state => state,
)(EditPlacePage);
