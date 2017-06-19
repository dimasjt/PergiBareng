import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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
        PlacePage
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(PlacePage);
