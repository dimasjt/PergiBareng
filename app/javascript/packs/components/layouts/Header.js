import React from "react";
import { AppBar, Drawer, MenuItem } from "material-ui";
import { Redirect } from "react-router-dom";

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
  redirect = (pathname) => {
    <Redirect to={pathname} />
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
          <MenuItem onTouchTap={this.redirect("/auth")}>Login / Register</MenuItem>
        </Drawer>
      </div>
    );
  }
}
