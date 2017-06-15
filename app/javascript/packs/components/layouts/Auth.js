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
  render() {
    return (
      <div style={styles.container}>
        <Paper zDepth={1} style={styles.wrapper}>
          <form>
            <TextField
              hintText="Email"
              fullWidth
            />
            <TextField
              hintText="Password"
              fullWidth
            />
            <br />
            <Button label="Login" primary />
          </form>
        </Paper>

        <Paper zDepth={1} style={styles.wrapper}>
          <form>
            <TextField
              hintText="Email"
              fullWidth
            />
            <TextField
              hintText="Password"
              fullWidth
            />
            <Button label="Register" primary />
          </form>
        </Paper>
      </div>
    );
  }
}
