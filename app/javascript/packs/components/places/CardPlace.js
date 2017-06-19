import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from "material-ui/Card";

export default class CardPlace extends Component {
  render() {
    const place = this.props.place;

    const overlay = <CardTitle title={place.name} />

    return (
      <Card>
        <CardMedia overlay={overlay}>
          <img src={place.image} />
        </CardMedia>
      </Card>
    )
  }
}
