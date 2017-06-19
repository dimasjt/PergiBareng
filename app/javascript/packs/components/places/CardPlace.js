import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from "material-ui/Card";
import { Link } from "react-router-dom";

export default class CardPlace extends Component {
  render() {
    const place = this.props.place;

    const overlay = <CardTitle title={place.name} />;

    return (
      <Link to={`/places/${place.slug}`}>
        <Card>
          <CardMedia overlay={overlay}>
            <img src={place.image.medium} />
          </CardMedia>
        </Card>
      </Link>
    );
  }
}
