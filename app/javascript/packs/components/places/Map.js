import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const styles = {
  container: {
    width: "100%",
    height: "400px",
  },
};

const Map = withGoogleMap(props => {
  return (
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    ></GoogleMap>
  );
});

const MapElement = (props) => {
  return (
    <Map
      containerElement={<div style={styles.container} />}
      mapElement={<div style={styles.container} />}
    />
  );
};

export default MapElement;
