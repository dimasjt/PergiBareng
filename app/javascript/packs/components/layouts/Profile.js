import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GridList, GridTile } from "material-ui/GridList";
import { Paper } from "material-ui";

// const LeftProfile = (props) => {
//
// }

class Profile extends Component {
  render() {
    return (
      <div>
        <GridList
          cellHeight="auto"
          cols={3}
        >
          <GridTile cols={1}>
            <Paper zDepth={1}>
            </Paper>
          </GridTile>

          <GridTile cols={2}>
            <Paper zDepth={1}>
            </Paper>
          </GridTile>
        </GridList>
      </div>
    );
  }
}

export default connect(
  state => state,
)(Profile);
