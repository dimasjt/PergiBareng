import React from "react";
import { AppBar, Drawer, MenuItem } from "material-ui";
import { Redirect, Link } from "react-router-dom";
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
}

const LogoutItem = ({actions}) => {
  return (
    <a>
      <MenuItem onTouchTap={actions.logout}>Logout</MenuItem>
    </a>
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
    const unloggedComponents = (
      <HeaderItem path="/auth" openDrawer={this.openDrawer} label="Login / Register" />
    );

    const loggedComponents = (
      <div>
        <HeaderItem path="/places" openDrawer={this.openDrawer} label="Places" />
        <LogoutItem {...this.props} />
      </div>
    );

    return (
      <div>
        <AppBar
          title="Header"
          onLeftIconButtonTouchTap={this.openDrawer}
        ></AppBar>
        <Drawer
          open={this.state.drawer}
          docked={false}
          onRequestChange={(drawer) => this.setState({drawer})}
        >
          <HeaderItem path="/" openDrawer={this.openDrawer} label="Home" />
          { this.props.user ? loggedComponents : unloggedComponents }
        </Drawer>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Header);
