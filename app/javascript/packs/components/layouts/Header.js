import React from "react";
import { AppBar, Drawer, MenuItem } from "material-ui";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../../actions/auth";

const styles = {
  link: {
    textDecoration: "none",
  },
};

const HeaderItem = ({ path, openDrawer, label }) => {
  return (
    <Link to={path} style={styles.link}>
      <MenuItem onTouchTap={openDrawer}>{label}</MenuItem>
    </Link>
  );
};

const UnLogged = ({ openDrawer }) => {
  return (
    <div>
      <HeaderItem path="/auth" openDrawer={openDrawer} label="Login / Register" />
    </div>
  );
};

const LoggedIn = ({ openDrawer, actions }) => {
  return (
    <div>
      <HeaderItem path="/places" openDrawer={openDrawer} label="Places" />
      <HeaderItem path="/profile" openDrawer={openDrawer} label="Profile" />
      <a>
        <MenuItem onTouchTap={actions.logout}>Logout</MenuItem>
      </a>
    </div>
  );
};

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      drawer: false,
    };
  }
  openDrawer = () => {
    this.setState({ drawer: !this.state.drawer });
  }
  render() {
    return (
      <div>
        <AppBar
          title="PergiBareng"
          onLeftIconButtonTouchTap={this.openDrawer}
        />
        <Drawer
          open={this.state.drawer}
          docked={false}
          onRequestChange={drawer => this.setState({ drawer })}
        >
          <AppBar title="PergiBareng" iconElementLeft={<div />} />
          <HeaderItem path="/" openDrawer={this.openDrawer} label="Home" />
          { this.props.user ?
            <LoggedIn {...this.props} openDrawer={this.openDrawer} /> :
            <UnLogged {...this.props} openDrawer={this.openDrawer} /> }
        </Drawer>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(Header);
