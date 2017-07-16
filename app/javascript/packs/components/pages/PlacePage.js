import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Tabs, Tab } from "material-ui/Tabs"
import PropTypes from "prop-types"
import { graphql } from "react-apollo"

import * as actions from "../../actions/places"
import { getPlace } from "../../query/place_query"

import Schedule from "../places/PlaceSchedules"
import Map from "../places/Map"

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
  },
  content: {
    flex: 6,
  },
  side: {
    flex: 2,
  },
}

class PlacePage extends React.Component {
  static propTypes = {
    places: PropTypes.object.isRequired,
    actions: PropTypes.any.isRequired,
    match: PropTypes.any.isRequired,
  }
  fetchSchedules = () => {
    const { slug } = this.props.match.params
    this.props.actions.getSchedules(slug)
  }
  render() {
    const place = this.props.places.active
    if (!place) {
      return null
    }
    return (
      <div>
        <div>
          <img src={place.image.large} alt={place.name} />
        </div>
        <div style={styles.container}>
          <div style={styles.content}>
            <Tabs>
              <Tab label="Overview">
                <div>
                  <h2>Overview about {place.name}</h2>
                  <p>{place.description}</p>
                </div>
              </Tab>
              <Tab label="Schedule">
                <Schedule schedules={place.schedules} />
              </Tab>
              <Tab label="Reviews">
                <div>Review</div>
              </Tab>
              <Tab label="Map">
                <Map {...this.props} />
              </Tab>
            </Tabs>
          </div>

          <div style={styles.side}>
            Side Content
          </div>
        </div>
      </div>
    )
  }
}

const withData = graphql(getPlace)

export default withData(connect(
  (state) => state,
  (dispatch) => ({ actions: bindActionCreators(actions, dispatch) }),
)(PlacePage))
