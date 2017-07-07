import React, { Component } from "react";
import { GridList, GridTile } from "material-ui/GridList";
import { Subheader } from "material-ui";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CardPlace from "../places/CardPlace";

import * as actions from "../../actions/places";

class Home extends Component {
  componentWillMount() {
    this.props.actions.getRecommendedPlaces();
  }
  render() {
    const cardPlaces = this.props.places.list.map((place) => {
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
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(Home);
