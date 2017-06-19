import React from "react";

export default class PlacePage extends React.Component {
  render() {
    return (
      <div>
        PlacePage {this.props.match.params.slug}
      </div>
    )
  }
}
