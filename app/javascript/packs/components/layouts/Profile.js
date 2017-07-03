import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Paper } from "material-ui";

import EditProfile from "../forms/EditProfile";

import * as actions from "../../actions/user";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 4,
    paddingLeft: "20px",
  },
  imgLeft: {
    width: "100%",
  },
  leftPanel: {
    padding: "30px",
  },
};

const LeftProfile = ({ user }) => {
  return (
    <div style={styles.left}>
      <Paper zDepth={1}>
        <div style={styles.leftPanel} className="profile-left">
          <div className="profile-left-header">
            <img src={user.avatar.medium} alt={user.name} style={styles.imgLeft} />
            <h3>{user.name}</h3>
          </div>
        </div>
      </Paper>
    </div>
  );
};

const RightProfile = (props) => {
  return (
    <div style={styles.right}>
      <Paper zDepth={1}>
        <div className="profile-right">
          <EditProfile onSubmit={props.updateUser} />
        </div>
      </Paper>
    </div>
  );
};

class Profile extends Component {
  render() {
    return (
      <div style={styles.container}>
        <LeftProfile {...this.props} />
        <RightProfile {...this.props} />
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch),
)(Profile);
