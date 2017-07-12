import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Paper, RaisedButton as Button } from "material-ui";
import { Card, CardMedia, CardTitle, CardActions } from "material-ui/Card";

import * as actions from "../../actions/places";

import CardPlace from "../places/CardPlace";

const styles = {
  container: {},
  containerCards: {
    display: "flex",
    justifyContent: "flex-start",
    flexFlow: "row wrap",
  },
  card: {
    flexFlow: "column",
  },
};

class OwnPlaces extends React.Component {
  componentWillMount() {
    this.props.actions.getOwnPlaces();
  }
  render() {
    const places = this.props.places.list.map(place => {
      const title = <CardTitle>{place.name}</CardTitle>
      return (
        <Card key={place.id} style={styles.card}>
          <CardMedia overlay={title}>
            <img src={place.image.medium} />
          </CardMedia>
          <CardActions>
            <Button label="Edit" href={`/places/${place.slug}/edit`} />
            <Button label="Delete" />
          </CardActions>
        </Card>
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
