import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { place as placeReducer } from "../../reducers/places";
import * as actions from "../../actions/places";

const PlaceHeader = ({ place }) => {
  return (
    <div>
      <img src={place.image.large} alt={place.name} />
    </div>
  );
};

class PlacePage extends React.Component {
  // componentWillMount() {
  //   const slug = this.props.match.params.slug;
  //   this.props.actions.getPlace(slug);
  // }
  render() {
    const { params } = this.props.match;

    return (
      <div>
        {/* <PlaceHeader place={place} /> */}
        PlacePage {params.slug}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
  // return Object.assign({}, state, {
  //   place: placeReducer(state),
  // });
};

export default connect(
  mapStateToProps,
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(PlacePage);
