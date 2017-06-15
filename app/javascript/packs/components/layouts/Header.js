import React from "react";
import { AppBar, Drawer, MenuItem } from "material-ui";
import { Redirect, Link } from "react-router-dom";

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

export default class Header extends React.Component {
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
          title="Header"
          onLeftIconButtonTouchTap={this.openDrawer}
        ></AppBar>
        <Drawer
          open={this.state.drawer}
          docked={false}
          onRequestChange={(drawer) => this.setState({drawer})}
        >
          <HeaderItem path="/" openDrawer={this.openDrawer} label="Home" />
          <HeaderItem path="/auth" openDrawer={this.openDrawer} label="Login / Register" />
        </Drawer>
      </div>
    );
  }
}
