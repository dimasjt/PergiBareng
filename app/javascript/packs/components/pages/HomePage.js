import React, { Component } from "react"
import { GridList, GridTile } from "material-ui/GridList"
import { Subheader } from "material-ui"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { graphql, gql } from "react-apollo"
import PropTypes from "prop-types"

import CardPlace from "../places/CardPlace"

import * as actions from "../../actions/places"

class HomePage extends Component {
  static propTypes = {
    places: PropTypes.any.isRequired,
  }
  render() {
    const cardPlaces = this.props.places.list.map((place) => {
      return (
        <GridTile key={place.id}>
          <CardPlace {...this.props} place={place} />
        </GridTile>
      )
    })

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
    )
  }
}

const GetPlaces = gql`
  query places {
    places(recommended: true) {
      id
      name
      description
      slug
      image {
        thumb
        medium
      }
    }
  }
`

const withData = graphql(GetPlaces)

export default withData(connect(
  (state) => state,
  (dispatch) => ({ actions: bindActionCreators(actions, dispatch) }),
)(HomePage))
