import React, { Component } from "react";
import { GridList, GridTile } from "material-ui/GridList";
import { Subheader } from "material-ui";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CardPlace from "../places/CardPlace";

import * as actions from "../../actions/places";

const styles = {
  card: {
    width: "32%",
    display: "inline-block",
    margin: "0.3%",
  },
};

class Home extends Component {
  componentWillMount() {
    this.props.actions.getRecommendedPlaces();
  }
  render() {
    const cardPlaces = this.props.places.map((place) => {
      return (
        <GridTile key={place.id}>
          <CardPlace {...this.props} place={place} />
        </GridTile>
      );
    });

    return (
      <div>
        <GridList
          cellHeight="auto"
          cols={4}
        >
          <Subheader>Recommended Places</Subheader>
          {cardPlaces}
        </GridList>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Home);
