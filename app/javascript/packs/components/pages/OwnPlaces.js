import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Paper } from "material-ui";

import * as actions from "../../actions/places";

import CardPlace from "../places/CardPlace";

const styles = {
  container: {},
  containerCards: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    flex: "1",
  },
};

class OwnPlaces extends React.Component {
  componentWillMount() {
    this.props.actions.getOwnPlaces();
  }
  render() {
    const places = this.props.places.list.map(place => {
      return (
        <Paper style={styles.card} key={place.id}>
          <CardPlace place={place} />
        </Paper>
      );
    });

    return (
      <div style={styles.container}>
        <h1>Your requested places</h1>
        <div style={styles.containerCards}>
          {places}
        </div>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(OwnPlaces);
