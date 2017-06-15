import React, { Component } from "react";
import { Paper, TextField, RaisedButton as Button } from "material-ui";

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

export default class Auth extends Component {
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
  render() {
    return (
      <div style={styles.container}>
        <Paper zDepth={1} style={styles.wrapper}>
          <form name="register">
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
            <Button label="Login" primary />
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
