import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GridList, GridTile } from "material-ui/GridList";
import { Paper } from "material-ui";

import EditProfile from "../forms/EditProfile";

import * as actions from "../../actions/user";

const styles = {
  imgLeft: {
    width: "100%",
  },
  leftPanel: {
    padding: "10px",
  },
};

const LeftProfile = ({ user }) => {
  return (
    <GridTile cols={1}>
      <Paper zDepth={1}>
        <div style={styles.leftPanel} className="profile-left">
          <div className="profile-left-header">
            <img src={user.avatar.medium} alt={user.name} style={styles.imgLeft} />
            <h3>{user.name}</h3>
          </div>
        </div>
      </Paper>
    </GridTile>
  );
};

const RightProfile = (props) => {
  return (
    <GridTile cols={1}>
      <Paper zDepth={1}>
        <div className="profile-right">
          <EditProfile onSubmit={props.updateUser} />
        </div>
      </Paper>
    </GridTile>
  );
};

class Profile extends Component {
  render() {
    return (
      <div>
        <GridList
          cellHeight="auto"
          cols={3}
        >
          <LeftProfile {...this.props} />
          <RightProfile {...this.props} />
        </GridList>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch),
)(Profile);
