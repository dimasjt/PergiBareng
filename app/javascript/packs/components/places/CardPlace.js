import React from "react";
import PropTypes from "prop-types";
import { Card, CardMedia, CardTitle } from "material-ui/Card";
import { Link } from "react-router-dom";

const CardPlace = ({ place }) => {
  const overlay = <CardTitle title={place.name} />;

  return (
    <Link to={`/places/${place.slug}`}>
      <Card>
        <CardMedia overlay={overlay}>
          <img src={place.image.medium} alt={place.name} />
        </CardMedia>
      </Card>
    </Link>
  );
};

CardPlace.propTypes = {
  place: PropTypes.object.isRequired,
};

export default CardPlace;
