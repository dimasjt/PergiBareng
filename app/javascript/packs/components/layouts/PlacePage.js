import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GridList, GridTile } from "material-ui/GridList";
import { Tabs, Tab } from "material-ui/Tabs";

import { place as placeReducer } from "../../reducers/places";
import * as actions from "../../actions/places";

const PlaceHeader = (props) => {
  const place = props.place;
  return (
    <div>
      <img src={place.image.large} alt={place.name} />
    </div>
  );
};

const Overview = (props) => {
  const { place } = props;
  return (
    <div>
      <h2>Overview about {place.name}</h2>
      <p>{place.description}</p>
    </div>
  );
};

const Schedule = (props) => {
  return (
    <div>Schedule</div>
  );
};

const Review = (props) => {
  return (
    <div>Review</div>
  );
};

const Map = (props) => {
  return (
    <div>Map</div>
  );
};

class PlacePage extends React.Component {
  componentWillMount() {
    const { slug } = this.props.match.params;
    this.props.actions.getPlace(slug);
  }
  render() {
    const { place } = this.props;
    if (!place) {
      return null;
    }
    return (
      <div>
        <PlaceHeader place={place} />
        <GridList
          cellHeight="auto"
          cols={3}
        >
          <GridTile cols={2}>
            <Tabs>
              <Tab label="Overview"><Overview {...this.props} /></Tab>
              <Tab label="Schedule"><Schedule {...this.props} /></Tab>
              <Tab label="Reviews"><Review {...this.props} /></Tab>
              <Tab label="Map"><Map {...this.props} /></Tab>
            </Tabs>
          </GridTile>

          <GridTile cols={1}>
            Side Content
          </GridTile>
        </GridList>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(PlacePage);
