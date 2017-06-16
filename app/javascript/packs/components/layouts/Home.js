import React, { Component } from "react";
import { GridList, GridTile } from "material-ui/GridList";
import { Subheader  } from "material-ui";

import CardPlace from "../places/CardPlace";

const places = [
  { id: 1, name: "Pangandaran", image: "http://4.bp.blogspot.com/-UQYrYL--_II/VgeIpDfDijI/AAAAAAAABgQ/pjIeaRUBhT8/s1600/Pantai%2Bpangandaran.jpg" },
  { id: 2, name: "Pangandaran", image: "http://4.bp.blogspot.com/-UQYrYL--_II/VgeIpDfDijI/AAAAAAAABgQ/pjIeaRUBhT8/s1600/Pantai%2Bpangandaran.jpg" },
  { id: 3, name: "Pangandaran", image: "http://4.bp.blogspot.com/-UQYrYL--_II/VgeIpDfDijI/AAAAAAAABgQ/pjIeaRUBhT8/s1600/Pantai%2Bpangandaran.jpg" },
  { id: 4, name: "Pangandaran", image: "http://4.bp.blogspot.com/-UQYrYL--_II/VgeIpDfDijI/AAAAAAAABgQ/pjIeaRUBhT8/s1600/Pantai%2Bpangandaran.jpg" },
  { id: 5, name: "Pangandaran", image: "http://4.bp.blogspot.com/-UQYrYL--_II/VgeIpDfDijI/AAAAAAAABgQ/pjIeaRUBhT8/s1600/Pantai%2Bpangandaran.jpg" },
  { id: 6, name: "Pangandaran", image: "http://4.bp.blogspot.com/-UQYrYL--_II/VgeIpDfDijI/AAAAAAAABgQ/pjIeaRUBhT8/s1600/Pantai%2Bpangandaran.jpg" },
  { id: 7, name: "Pangandaran", image: "http://4.bp.blogspot.com/-UQYrYL--_II/VgeIpDfDijI/AAAAAAAABgQ/pjIeaRUBhT8/s1600/Pantai%2Bpangandaran.jpg" },
  { id: 8, name: "Pangandaran", image: "http://4.bp.blogspot.com/-UQYrYL--_II/VgeIpDfDijI/AAAAAAAABgQ/pjIeaRUBhT8/s1600/Pantai%2Bpangandaran.jpg" },
];

const styles = {
  card: {
    width: "32%",
    display: "inline-block",
    margin: "0.3%",
  },
};

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      places,
    };
  }
  render() {
    const cardPlaces = this.state.places.map((place) => {
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
};
