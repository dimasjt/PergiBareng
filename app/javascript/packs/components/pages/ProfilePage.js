import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Paper } from "material-ui"
import PropTypes from "prop-types"

import * as actions from "../../actions/user"

import EditProfile from "../forms/EditProfile"

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
}

class ProfilePage extends Component {
  static propTypes = {
    actions: PropTypes.any.isRequired,
    user: PropTypes.object.isRequired,
  }
  handleUpdateUser = (values) => {
    this.props.actions.updateUser(values)
  }
  render() {
    const { user } = this.props

    return (
      <div style={styles.container}>
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

        <div style={styles.right}>
          <Paper zDepth={1}>
            <div className="profile-right">
              <EditProfile onSubmit={this.handleUpdateUser} />
            </div>
          </Paper>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => state,
  (dispatch) => ({ actions: bindActionCreators(actions, dispatch) }),
)(ProfilePage)
