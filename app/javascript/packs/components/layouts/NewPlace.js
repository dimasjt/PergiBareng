import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Paper } from "material-ui";

import * as actions from "../../actions/places";

import NewPlaceForm from "../forms/NewPlaceForm";

const styles = {
  container: {
    width: "60%",
    margin: "0 auto",
  },
  form: {
    padding: "20px",
    width: "100%",
  },
};

class NewPlace extends React.Component {
  createPlace = (values) => {
    this.props.actions.postPlace(values);
  }
  render() {
    return (
      <div style={styles.container}>
        <Paper style={styles.form}>
          <NewPlaceForm onSubmit={this.createPlace} />
        </Paper>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(NewPlace);
