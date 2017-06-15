import React, { Component } from "react";
import { Paper, TextField, RaisedButton as Button } from "material-ui";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../../actions/auth";

const styles = {
  container: {
    width: "90%",
    margin: "0 auto",
    textAlign: "center",
  },
  wrapper: {
    padding: 20,
    margin: 30,
    width: "40%",
    display: "inline-block",
    textAlign: "left",
  },
};

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      register: {
        email: null,
        password: null,
      },
      login: {
        email: null,
        password: null,
      },
    };
  }
  handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    let type = event.target.form.name;

    this.setState({
      [type]: {
        ...this.state[type],
        [name]: value,
      }
    });
  }
  registerUser = (event) => {
    event.preventDefault();
    let user = {
      user: this.state.register,
    };

    this.props.actions.registerUser(user);
    console.log(this.props.actions)
  }
  render() {
    return (
      <div style={styles.container}>
        <Paper zDepth={1} style={styles.wrapper}>
          <form name="register" onSubmit={this.registerUser}>
            <h1>Register</h1>
            <TextField
              hintText="Email"
              fullWidth
              type="email"
              name="email"
              onChange={this.handleChange}
            />
            <TextField
              hintText="Password"
              fullWidth
              type="password"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <Button label="Login" primary onTouchTap={this.registerUser} />
          </form>
        </Paper>

        <Paper zDepth={1} style={styles.wrapper}>
          <form name="login">
            <TextField
              hintText="Email"
              fullWidth
              type="email"
              name="email"
              onChange={this.handleChange}
            />
            <TextField
              hintText="Password"
              fullWidth
              type="password"
              name="password"
              onChange={this.handleChange}
            />
            <Button label="Register" primary />
          </form>
        </Paper>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Auth);
